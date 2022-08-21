import { Button, Col, Row, Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import rage from "../../assets/img/box/rage.svg";
import { BoxDropInfo } from "./components/BoxDropInfo";
import {
	PlusOutlined,
	MinusOutlined,
	ArrowLeftOutlined,
} from "@ant-design/icons";
import "./detailHero.scss";
import { GameButton2 } from "components/GameButton2/GameButton2";
import { Link, useNavigate, useParams } from "react-router-dom";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { buyNFT } from "utils/callContract";
import { HERO, HEROs, NFT, NFTs, _HERO, _NFT } from "configs/constants";
import heroimg from "../../assets/img/heros/hero-01.png";
import { HeroAtribute } from "components/HeroAttribute/HeroAtribute";

export const DetailHero = () => {
	const { account, library } = useActiveWeb3React();
	const { heroId, nftId } = useParams();
	const [hero, setHero] = useState<_HERO | undefined>();

	const [quantity, setQuantity] = useState<number>(1);
	const navigate = useNavigate();
	const handleBack = () => {
		navigate(-1);
	};
	useEffect(() => {
		if (heroId && nftId) {
			if (!(+heroId in HERO) || !(+nftId in NFT)) {
				// TODO check if nft is not exists
				// navigate("/404");
			} else {
				setHero(HEROs[+heroId as HERO][+nftId as NFT]);
			}
		}
	}, [heroId]);

	return (
		<div className="container detail-box">
			<div style={{ marginBottom: "2em" }}>
				<Link to={"/"}>
					<Button
						// onClick={handleBack}
						type="primary"
						icon={<ArrowLeftOutlined />}
						size="large"
					>
						BACK
					</Button>
				</Link>
			</div>
			<Row gutter={32}>
				<Col xl={10} xs={24}>
					<div className="thumbnail">
						{/* <img src={box?.image} alt="" className="box-thumbnail" /> */}
						<img src={hero?.image} alt="" className="box-thumbnail" />
						<h1 className="box-title">{hero?.name || ""}</h1>
						{/* Show thong tin tuong */}
						<p className="desc text-center" style={{ padding: "2em" }}>
							{hero?.desc}
						</p>
						{/* <p>Share this</p> */}
						{/* <div className="socials">mot dong icon</div> */}
					</div>
				</Col>
				<Col xl={14} xs={24}>
					<Row gutter={32} className="mobile-reverse">
						{/* <Col xl={12} xs={24}>
              <BoxDropInfo nft={box} />
            </Col> */}
						<Col xl={24} xs={24}>
							<HeroAtribute hero={hero} />
						</Col>
					</Row>
				</Col>
			</Row>
		</div>
	);
};
