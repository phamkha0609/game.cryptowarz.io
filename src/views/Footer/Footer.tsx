import { Button, Col, Form, Input, Row, Space } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import logo from "../../assets/img/logo.png";
import tele from "../../assets/img/ic1.png";
import ic2 from "../../assets/img/ic2.png";
import ic3 from "../../assets/img/ic3.png";
import ic4 from "../../assets/img/ic4.png";
import ic5 from "../../assets/img/ic5.png";
import ic6 from "../../assets/img/ic6.png";
import ic7 from "../../assets/img/ic7.png";
import "./style.scss";
import { ContactUs } from "components/email/email";

const host = "https://cryptowarz.io/"

export const Footer = () => {
  return (
    <div className="footer-ne">
      <div
        className=" container"
        style={{
          marginTop: "5em",
          backgroundRepeat: "no-repeat,",
          backgroundSize: "100% 100%",
        }}
      >
        <Row>
          <Col xl={6} xs={24}>
            <div className="logo">
              <img src={logo} />
            </div>

            <p style={{ marginBottom: 0 }}>
              LEARN to WAR - WAR to EARN
            </p>
          </Col>
          <Col xl={12} xs={24}>
            <Row className="fs-20">
              <Col xl={12} xs={24}>
                <a href={host + "#about"}>About Us</a>
                <a href={host + "#game-play"}>
                  Gameplay
                </a>
                <a href="https://www.pinksale.finance/launchpad/0xCfFBbeD728392E395c4e35Ad8eDF6BB307449575?chain=BSC" target={"_blank"}>Join Presale</a>
                <a href={host + "#tokenomics"}>Tokenomics</a>
                <a href={host + "#roadmap"}>Roadmap</a>
                <a href={host + " #team"}>Team</a>
                <a href={host + "terms"}>Terms</a>
                <a href={host + "#partner"}>Partners</a>
              </Col>
              <Col xl={12} xs={24}>
              <a href="#">Audit Report</a>
                <a role="button" onClick={() => { }}>
                  Market Place
                </a>
                <a href={host + "#nft-box"}>NFT Box</a>
                <a href={host + "#game-mode"}>Game mode</a>
                <a
                  href="https://crypto-warz.gitbook.io"
                  target={"_blank"}
                >
                  White Paper
                </a>
              </Col>
              <Col span={24}>
                <Space className="social-bar-footer">
                <a href="https://t.me/cryptowarzglobal" target={"_blank"}>
                    <img src={tele} alt="" />
                  </a>
                  <a href="https://t.me/cryptowarzAnnouncements" target={"_blank"}>
                    <img src={ic2} alt="" />
                  </a>
                  <a href="https://twitter.com/cryptowarz_p2e" target={"_blank"}>
                    <img src={ic3} alt="" />
                  </a>
                  <a href="https://discord.gg/4MDDparQPz" target={"_blank"}>
                    <img src={ic4} alt="" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCnaNqtapKwchaqdIAIUDUJw"
                    target={"_blank"}
                  >
                    <img src={ic5} alt="" />
                  </a>
                  <a
                    href="https://linktr.ee/cryptowarz"
                    target={"_blank"}
                  >
                    <img src={ic6} alt="" />
                  </a>
                  <a href="https://bscscan.com/token/0x82be242bdf3a5c8da8fe3c1fa303c1d8d0e7bb7f" target={"_blank"}>
                    <img src={ic7} alt="" />
                  </a>
                </Space>
              </Col>
            </Row>
          </Col>

          <Col xl={6} xs={24}>
            <ContactUs />
          </Col>
          <p
            className="text-center"
            style={{ fontSize: 14, width: "100%", marginTop: "1em" }}
          >
            Copyright © 2022 <br /> CryptoWarz Group
          </p>
        </Row>
      </div>
    </div>
  );
};
