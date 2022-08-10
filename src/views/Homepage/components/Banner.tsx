import { VideoModal } from "components/VideoModal/VideoModal";
import React, { useState } from "react";
import {
  Button,
  Columns,
  Content,
  Heading,
  Icon,
  Modal,
} from "react-bulma-components";
import bannerImg from "../../../assets/images/h1.svg";
import banner1 from "../../../assets/images/banner1.svg";
import banner2 from "../../../assets/images/banner2.svg";

export const Banner = () => {
  const [visible, setVisible] = useState(false);
  return (
    <section className="center-content" id="banner">
      <Columns className="mobile-reverse">
        <Columns.Column size={7}>
          <Content>
            <Heading subtitle size={5} style={{ marginBottom: "1em" }}>
              WELCOME TO GBDOGE!
            </Heading>
            <Heading size={2}>
              Make the World <br /> GREEN BABYDOGE <br /> with Memes!
            </Heading>

            <p className="desc">
              GREEN BABYDOGE is a fully decentralized, zero-emission and fairly
              distributed community-driven token disrupting the meme economy
              aiming at protecting the environment
            </p>
          </Content>

          <Button.Group>
            <Button color="success" outlined onClick={() => setVisible(true)}>
              <Icon>
                <span className="fas fa-play" />
              </Icon>
              <span>View Summary</span>
            </Button>
            <a href="#presale" className="is-success button">
              Buy GBDoge
            </a>
            {/* <Button color={"success"}></Button> */}
          </Button.Group>
        </Columns.Column>
        <Columns.Column size={5} style={{ minHeight: "500px" }}>
          <div id="bannerAnimate">
            <img src={banner1} alt="" id="bannerBg" />
            <img src={banner2} alt="" id="bannerCho" />
          </div>
          {/* <img
            src={bannerImg}
            alt=""
            className="animate__animated animate__bounce"
          /> */}
        </Columns.Column>
      </Columns>
      <VideoModal visible={visible} onClose={() => setVisible(false)} />
    </section>
  );
};
