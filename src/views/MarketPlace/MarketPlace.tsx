import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space, Tabs } from "antd";
import { CardComponent } from "components/CardComponent/CardComponent";
import { HeroComponent } from "components/CardComponent/HeroComponent";
import { LandComponent } from "components/CardComponent/LandComponent";
import { Filter } from "components/Filter/Filter";
import { KING_TYPES, LAND_TYPES } from "configs/constants";
import { ethers } from "ethers";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { buyBox, getBoxSales, getNFT, _getOwnNFTs } from "utils/callContract";
import { getKingNFT, getLandNFT } from "utils/getContract";
import box1 from "../../assets/img/b1.svg";

import hero from "../../assets/img/tmp/wood.png";
import Loading from "../../components/CustomLoading/Loading";
import Modal from "../../components/CustomModal/Modal";
import "./marketPlace.scss";
import bd1 from "../../assets/img/bd1.png";
import bd2 from "../../assets/img/bd2.png";
import bd3 from "../../assets/img/bd3.png";

const TAB = ["box", "hero"];
const boxList: any[] = [
	{
		id: 0,
		title: 'bulldog nft box'
	}
]
const lands: any[] = [
	{	
		id: "1",
		url: bd1,
		title: "bulldog 1"
	},
	{
		id: "2",
		url: bd2,
		title: "bulldog 2"
	},
	{
		id: "3",
		url: bd3,
		title: "bulldog 3"
	},
];

export const MarketPlace = () => {
	const [visible, setVisible] = useState(false);
	const { account, library } = useActiveWeb3React();
	const location = useLocation();
	const urlParams = new URLSearchParams(location.search);
	const tab = urlParams.get("tab");
	const [isShow, setShow] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [reward, setReward] = useState<any>();
	// const [boxList, setBoxList] = useState<any[]>([]);

	const [refresh, setRefresh] = useState(false);

	const [currentTab, setCurrentTab] = useState<string>("box");
	// const [lands, setLands] = useState<any[]>([]);
	const [kings, setKings] = useState<any[]>([]);

	useEffect(() => {
		tab && TAB.includes(tab) && setCurrentTab(tab);
	}, [tab]);

	useEffect(() => {
		(async () => {
			if (!account || !library) {
				setLoading(false);
				return;
			}
			try {
				console.log("1");
				const res = await _getOwnNFTs(library, account);
				// setLands(res.lands);
				setKings(res.kings);
				// const boxList = await getBoxSales(library);
				// setBoxList(boxList);
				setLoading(false);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		})();
	}, [account, library, refresh]);

	console.log(isLoading);

	const handleBuyBox = async (boxId: number) => {
		if (!account || !library) return alert("Please connect wallet");
		try {
			setLoading(true);
			const tx = await buyBox(library, account, boxId);
			let iface = new ethers.utils.Interface([
				"event Transfer(address indexed from, address indexed to, uint256 indexed tokenId);",
			]);
			const transferEvent = iface.parseLog(tx.logs[2]);
			let nft = getLandNFT(library, account);
			if (boxId != 0) nft = getKingNFT(library, account);
			const _nft = await getNFT(nft, transferEvent.args.tokenId);
			setReward({ ..._nft, name: KING_TYPES[_nft.nftClass] });
			setShow(true);
			setLoading(false);
			setRefresh((pre) => !pre);
		} catch (error: any) {
			console.log("error");
			setLoading(false);
			if (error.data?.message) return alert(error.data.message);
			else if (error.message) return alert(error.message);
		}
	};

	return (
		<div className="container">
			<Modal isShow={isShow} reward={reward} changeShowStatus={setShow} />
			<Loading isShow={isLoading} />

			<Row gutter={24}>
				<Col xl={24} xs={24}>
					<Tabs
						activeKey={currentTab}
						className="tab-custom"
						onChange={(k) => setCurrentTab(k)}
					>
						<Tabs.TabPane tab="BOX" key="box">
							<div className="mobile">
								<Space
									style={{
										width: "100%",
										justifyContent: "flex-end",
										marginBottom: "1em",
									}}
								></Space>
							</div>

							<Row gutter={[24, 24]}>
								{boxList.map((e, id) => (
									<Col key={id} xl={8} xs={12}>
										<CardComponent id={id} box={e} title={e.title} handleClick={handleBuyBox} />
									</Col>
								))}
							</Row>
						</Tabs.TabPane>
						<Tabs.TabPane tab="BULLDOG NFT" key="land">
							<div className="mobile">
								<Space
									style={{
										width: "100%",
										justifyContent: "flex-end",
										marginBottom: "1em",
									}}
								></Space>
							</div>
							<Row gutter={[24, 24]}>
								{lands.map((e, id) => (
									<Col key={id} xl={6} xs={12}>
										<LandComponent land={e} />
									</Col>
								))}
							</Row>
						</Tabs.TabPane>
					</Tabs>
				</Col>
			</Row>
			<Drawer
				placement={"right"}
				closable={false}
				onClose={() => setVisible(false)}
				visible={visible}
				key={"placement"}
			>
				<Space style={{ width: "100%", justifyContent: "flex-end" }}>
					<Button
						className="circle-btn"
						type="text"
						icon={<CloseOutlined style={{ color: "#000" }} />}
						style={{ marginBottom: "1em" }}
						onClick={() => setVisible(false)}
					/>
				</Space>
				<Filter />
			</Drawer>
		</div>
	);
};
