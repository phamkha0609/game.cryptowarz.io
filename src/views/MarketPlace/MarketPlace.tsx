import { CloseOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space, Tabs } from "antd";
import { CardComponent } from "components/CardComponent/CardComponent";
import { HeroComponent } from "components/CardComponent/HeroComponent";
import { LandComponent } from "components/CardComponent/LandComponent";
import { Filter } from "components/Filter/Filter";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { approveTokenSale, buyBox, _getOwnNFTs } from "utils/callContract";
import box1 from "../../assets/img/b1.svg";
import b1 from "../../assets/img/box/box-1.png";
import b2 from "../../assets/img/box/box-2.png";
import hero from "../../assets/img/tmp/wood.png";
import Loading from "../../components/CustomLoading/Loading";
import Modal from "../../components/CustomModal/Modal";
import "./marketPlace.scss";

const boxList = [
	{
		id: 0,
		sc: b1,
		content: "NFT LAND",
		created: 3000,
		limit: 100,
	},
	{
		id: 1,
		sc: b2,
		content: "NFT KING KETHER",
		created: 5000,
		limit: 255,
	},
];

const nftList = [
	{
		id: 0,
		sc: hero,
		name: "KING KETHER",
		created: 3000,
		price: 3000,
	},
	{
		id: 1,
		sc: hero,
		name: "KING KETHER",
		created: 3000,
		price: 3000,
	},
	{
		id: 2,
		sc: hero,
		name: "KING KETHER",
		created: 3000,
		price: 3000,
	},
	{
		id: 3,
		sc: hero,
		name: "KING KETHER",
		created: 3000,
		price: 3000,
	},
	{
		id: 4,
		sc: hero,
		name: "KING KETHER",
		created: 3000,
		price: 3000,
	},
];
const TAB = ["box", "hero"];

export const MarketPlace = () => {
	const [visible, setVisible] = useState(false);
	const { account, library } = useActiveWeb3React();
	const location = useLocation();
	const urlParams = new URLSearchParams(location.search);
	const tab = urlParams.get("tab");
	const [isShow, setShow] = useState(false);
	const [isLoading, setLoading] = useState(true);

	const [refresh, setRefresh] = useState(false);

	const [currentTab, setCurrentTab] = useState<string>("box");
	const [lands, setLands] = useState<any[]>([]);
	const [kings, setKings] = useState<any[]>([]);

	useEffect(() => {
		tab && TAB.includes(tab) && setCurrentTab(tab);
	}, [tab]);

	useEffect(() => {
		(async () => {
			if (!account || !library) return;
			_getOwnNFTs(library, account)
				.then((res) => {
					setLands(res.lands);
					setKings(res.kings);
					setLoading(false);
				})
				.catch((err) => {
					console.log(err);
					setLoading(false);
				});
		})();
	}, [account, library, refresh]);

	// data exp
	const reward = {
		name: "KING KETHER",
		type: "EXAMPLE",
		property: "EXAMPLE",
	};

	const handleBuyBox = async (boxId: number) => {
		if (!account || !library) return alert("Please connect wallet");
		try {
			!isLoading && setLoading(true);
			await buyBox(library, account, boxId);
			alert("Buy success");
			setRefresh((pre) => !pre);
		} catch (error: any) {
			if (/ERC20: insufficient allowance/gi.test(error.message)) {
				await approveTokenSale(library, account);
				handleBuyBox(boxId);
			} else {
				error.message && alert(error.message);
				setLoading(false);
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container">
			<Modal isShow={isShow} reward={reward} />
			<Loading isShow={isLoading} />

			<Row gutter={24}>
				{/* <Col xl={8} xs={0}>
          <Filter />
        </Col> */}
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
										<CardComponent
											stateChanger={setShow}
											changeLoading={setLoading}
											handleClick={handleBuyBox}
											bg={box1}
											id={id}
											sc={e.sc}
											content={e.content}
											created={e.created}
											limit={e.limit}
										/>
									</Col>
								))}
							</Row>
						</Tabs.TabPane>
						<Tabs.TabPane tab="LAND" key="land">
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

						<Tabs.TabPane tab="KING KETHER" key="kether">
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
								{kings.map((e, id) => (
									<Col key={id} xl={6} xs={12}>
										<HeroComponent king={e} />
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
