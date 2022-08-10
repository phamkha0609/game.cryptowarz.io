import { SettingFilled, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import { GameButton } from "components/GameButton/GameButton";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import useWallet from "hooks/useWallet";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import formatAddress from "utils/formatAddress";
import { injected } from "utils/web3React";

import "../styles/navbar.scss";

export const NavbarComponent = () => {
  const { connect } = useWallet();
  const { account } = useActiveWeb3React();

  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleConnect = () => connect(injected);

  return (
    <>
      <div className="navbar">
        <div className="container">
          <div
            style={{
              width: "100%",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Space>
              <div className="logo">
                <Link style={{ color: "#fff" }} to={"/"}>
                  CRYPTOWARZ
                </Link>
              </div>
              {/* <Button
                className="desktop"
                size="middle"
                style={{ marginLeft: "20px" }}
                icon={<SettingFilled style={{ color: "#00ffff" }} />}
                type="primary"
              >
                <Link style={{ color: "#fff" }} to={"/market"}>
                  {" "}
                  Marketplace
                </Link>
              </Button> */}
            </Space>

            <GameButton className="desktop" onClick={handleConnect}>
              {account ? formatAddress(account) : "CONNECT WALLET"}
            </GameButton>
            <Button
              className="mobile"
              type="text"
              icon={<MenuOutlined />}
              onClick={() => setVisible(true)}
            />
          </div>
        </div>
      </div>

      <Drawer
        placement={"right"}
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
        key={"abc"}
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
        <GameButton onClick={handleConnect}>
          {account ? formatAddress(account) : "CONNECT WALLET"}
        </GameButton>
      </Drawer>
    </>
  );
};
