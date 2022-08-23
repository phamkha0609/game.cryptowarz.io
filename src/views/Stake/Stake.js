import React, { useEffect, useMemo, useState } from "react";
import "./Stake.css";
import logo from "../../assets/img/logo.png";
import history from "../../assets/img/history.svg";
import Modal from "./components/Modal";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { getTokenBalance, staking } from "utils/callContract";
import { formatEther } from "ethers/lib/utils";
import Loading from "../../components/CustomLoading/Loading";
import { GET_STAKING } from "apollo/queries";
import { useQuery } from "@apollo/client";

const stakes = [
	{
		id: "0",
		name: "3 Months",
	},
	{
		id: "1",
		name: "6 Months",
	},
	{
		id: "2",
		name: "1 Year",
	},
];

export const Stake = () => {
	const { account, library } = useActiveWeb3React();

	const { loading, error, data, refetch } = useQuery(GET_STAKING, {
		variables: { account: account ?? "" },
		pollInterval: 12000,
	});

	const [show, setShow] = useState(false);
	const [submitting, setSubmitting] = useState(false);
	const [balance, setBalance] = useState();
	const [amount, setAmount] = useState("");
	const [stakeId, setStakeId] = useState(stakes[0].id);

	const currentStake = useMemo(() => {
		if (!stakeId || !data) return undefined;
		return data.stakes.find((s) => s.id == stakeId);
	}, [stakeId, data]);

	const estimatedReward = useMemo(() => {
		if (!amount || isNaN(amount) || !currentStake) return 0;
		return (
			(amount * currentStake.apy * currentStake.duration) /
			(1e5 * 365 * 24 * 60 * 60)
		);
	}, [currentStake, amount]);

	useEffect(() => {
		(async () => {
			if (!account || !library) return;

			try {
				const balance = await getTokenBalance(library, account);
				setBalance(balance);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [account, library]);

	const showHistory = () => {
		setShow(true);
	};

	const handleStake = async (stakeId) => {
		if (!account || !library) return alert("Connect wallet");
		if (!amount || isNaN(amount)) return alert("Enter valid amount");
		try {
			setSubmitting(true);
			await staking(library, account, stakeId, amount);
			refetch();
			alert("Staking success");
			setSubmitting(false);
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		}
	};

	return (
		<div className="contaner stake-wrap">
			<Loading isShow={submitting} />

			<h1 className="title">STAKE $WARZ TO EARN REWARDS</h1>

			<div className="content-wrap">
				<div className="caculating">
					<div className="caculate-board">
						<div className="caculate-title">
							<img src={logo} width="60" alt="logo" />
							<h3>STAKING CALCULATE</h3>
						</div>

						<div className="history">
							<button
								style={{ backgroundColor: "transparent", border: "none" }}
								onClick={() => showHistory()}
							>
								<img
									src={history}
									alt="history"
									width={30}
									style={{ cursor: "pointer" }}
								/>
							</button>
						</div>

						<Modal
							isShow={show}
							stateChager={setShow}
							userStakes={data?.userStakes}
							setSubmitting={setSubmitting}
							refetch={refetch}
						/>

						<div className="balance">
							<div>Balance: </div>
							<div>
								{balance
									? parseFloat(formatEther(balance.toString())).toFixed(4)
									: "--"}{" "}
								WARZ
							</div>
						</div>

						<div className="input-board">
							<div>
								<img src={logo} width="30" alt="logo" />
								WARZ
							</div>
							<input
								placeholder="0.0"
								type={"number"}
								min={0}
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
							<button onClick={() => balance && setAmount(balance.toString())}>
								MAX
							</button>
						</div>

						<div className="arrow">&darr;</div>

						<select title="bulk" onChange={(e) => setStakeId(e.target.value)}>
							{stakes.map((s) => (
								<option key={s.id} value={s.id}>
									{s.name}
								</option>
							))}
						</select>

						<div className="info">
							<div className="info-item">
								<div>Locktime:</div>
								<b>
									{currentStake?.duration &&
										Math.floor(currentStake?.duration / (3600 * 24))}{" "}
									days
								</b>
							</div>
							<div className="info-item">
								<div>APR(%):</div>
								<b>{currentStake?.apy / 1000} %</b>
							</div>
							<div className="info-item">
								<div>Estimated reward:</div>
								<b>{parseFloat(estimatedReward).toFixed(6)} WARZ</b>
							</div>
						</div>

						{currentStake?.duration && (
							<div className="lock">
								Lock token until{" "}
								{new Date(
									Date.now() + +currentStake.duration * 1000
								).toLocaleDateString()}
							</div>
						)}

						<button className="btn-stake" onClick={() => handleStake(0)}>
							STAKE
						</button>
					</div>
				</div>
				<div className="explan"></div>
			</div>
		</div>
	);
};
