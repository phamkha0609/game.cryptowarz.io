import { Button, Col, Row, Space } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import rage from "../../assets/img/box/rage.svg";
import { BoxDropInfo } from "./components/BoxDropInfo";
import {
  PlusOutlined,
  MinusOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import "./detailBox.scss";
import { GameButton2 } from "components/GameButton2/GameButton2";
import { Link, useNavigate, useParams } from "react-router-dom";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { buyNFT } from "utils/callContract";
import { NFT, NFTs, _NFT } from "configs/constants";

export const DetailBox = () => {
  const { account, library } = useActiveWeb3React();
  const { nft } = useParams();

  const [box, setBox] = useState<_NFT | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (nft) {
      if (!(+nft in NFT)) {
        // TODO check if nft is not exists
        // navigate("/404");
      } else {
        setBox(NFTs[+nft as NFT]);
      }
    }
  }, [nft]);

  const handleBuyNFT = useCallback(async () => {
    if (!account || !library) return alert("please connect wallet");
    if (submitting) return;
    if (!nft || (nft && !(nft in NFT))) return alert("invalid nft");
    setSubmitting(true);
    try {
      await buyNFT(library, account, +nft, quantity);
      setSubmitting(false);
      alert("buy success");
      navigate(`/?tab=hero`);
    } catch (error: any) {
      setSubmitting(false);
      console.error(error);
      error.data?.message && alert(error.data?.message);
    }
  }, [library, account, quantity]);

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
      <Row gutter={24}>
        <Col xl={12} xs={24}>
          <div className="thumbnail">
            <img src={box?.image} alt="" className="box-thumbnail" />
            <h1 className="box-title">{box?.name}</h1>

            {/* <p>Share this</p>
            <div className="socials">mot dong icon</div> */}
          </div>
        </Col>
        <Col xl={12} xs={24}>
          <Row gutter={24} className="mobile-reverse">
            <Col xl={24} xs={24}>
              <BoxDropInfo nft={box} />
            </Col>
            
          </Row>
        </Col>
      </Row>
    </div>
  );
};
