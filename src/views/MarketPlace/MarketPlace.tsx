import { CloseOutlined, FilterOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Row, Space, Tabs } from "antd";
import { CardComponent } from "components/CardComponent/CardComponent";
import { HeroComponent } from "components/CardComponent/HeroComponent";
import { Filter } from "components/Filter/Filter";
import { NFTs } from "configs/constants";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getOwnNFTs } from "utils/callContract";
import box1 from "../../assets/img/b1.svg";
import "./marketPlace.scss";
import b1 from "../../assets/img/box/box-1.png";
import b2 from "../../assets/img/box/box-2.png";

const nftList = [
  {
    id: 0,
    sc: b1
  },
  {
    id: 1,
    sc: b2
  },
]

const TAB = ["box", "hero"];

export const MarketPlace = () => {
  const [visible, setVisible] = useState(false);
  const { account, library } = useActiveWeb3React();
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const tab = urlParams.get("tab");

  const [currentTab, setCurrentTab] = useState<string>("box");
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    tab && TAB.includes(tab) && setCurrentTab(tab);
  }, [tab]);

  useEffect(() => {
    (async () => {
      if (!account || !library) return;

      getOwnNFTs(library, account)
        .then((nfts: any) => setNfts(nfts))
        .catch(console.error);
    })();
  }, [account, library]);

  return (
    <div className="container">
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
                >
                </Space>
              </div>

              <Row gutter={[16, 16]}>
                {nftList.map((e, id) => (
                  <Col key={id} xl={8} xs={12}>
                    <CardComponent bg={box1} id={id} sc={e.sc} />
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
                >
                </Space>
              </div>
            </Tabs.TabPane>

            <Tabs.TabPane tab="KING KETHER" key="kether">
              <div className="mobile">
                <Space
                  style={{
                    width: "100%",
                    justifyContent: "flex-end",
                    marginBottom: "1em",
                  }}
                >
                </Space>
              </div>
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
