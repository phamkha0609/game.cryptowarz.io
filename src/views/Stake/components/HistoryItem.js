import React, { useMemo } from "react";
import "./Modal.scss";
import clock from "../../../assets/img/clock.svg";
import cacl from "../../../assets/img/calculator.svg";
import { formatEther } from "ethers/lib/utils";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { claim } from "utils/callContract";

function HistoryItem({ stake, setSubmitting, refetch }) {
	const { account, library } = useActiveWeb3React();

	const amount = useMemo(() => {
		if (!stake?.amount) return 0;
		const _p = formatEther(stake.amount);
		const _a = parseFloat(_p).toFixed(4);
		return _a == 0 ? _p : _a;
	}, [stake]);

	const apy = useMemo(() => {
		if (!stake?.stake?.apy) return 0;
		return stake.stake.apy / 1000;
	}, [stake]);

	const end = useMemo(() => {
		if (!stake?.start || !stake?.stake?.duration) return "";
		return new Date(
			(stake.start + stake.stake.duration) * 1000
		).toLocaleDateString();
	}, [stake]);

	const handleClaim = async () => {
		if (!account || !library) return alert("Connect wallet");
		if (!stake.id) return;
		try {
			setSubmitting(true);
			await claim(library, account, stake.id);
			// alert("Claim success");
			refetch();
			setSubmitting(false);
		} catch (error) {
			console.log(error);
			setSubmitting(false);
		}
	};

	return (
		<div className="history-item">
			<div className="col-element">
				<small>Total staked</small>
				<div>
					{amount}
					BUSD
				</div>
			</div>
			<div className="col-element">
				<small>APY</small>
				<div>
					{apy}% <img alt="icon" src={cacl} width={20} />
				</div>
			</div>
			<div className="col-element">
				<small>Ends in</small>
				<div>
					{end} <img alt="icon" src={clock} width={20} />
				</div>
			</div>
			<div className="col-element">
				<div
					className={
						stake.claimed ? "btn-claim-stake-disable" : "btn-claim-stake"
					}
					onClick={handleClaim}
				>
					CLAIM
				</div>
			</div>
		</div>
	);
}

export default HistoryItem;
