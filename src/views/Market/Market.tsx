import { Col, Row } from "antd";
import { HeroCard } from "components/HeroCard/HeroCard";
import React from "react";
import hero1 from "../../assets/img/heros/hero-01.png";
import hero2 from "../../assets/img/heros/hero-02.png";
import hero3 from "../../assets/img/heros/hero-03.png";
import hero4 from "../../assets/img/heros/hero-04.png";
import hero5 from "../../assets/img/heros/hero-05.png";
import hero6 from "../../assets/img/heros/hero-06.png";
import hero7 from "../../assets/img/heros/hero-07.png";
import hero8 from "../../assets/img/heros/hero-08.png";
import hero9 from "../../assets/img/heros/hero-09.png";
import hero10 from "../../assets/img/heros/hero-10.png";
import hero11 from "../../assets/img/heros/hero-11.png";
import hero12 from "../../assets/img/heros/hero-12.png";
import hero13 from "../../assets/img/heros/hero-13.png";
import hero14 from "../../assets/img/heros/hero-14.png";
import hero15 from "../../assets/img/heros/hero-15.png";
import hero16 from "../../assets/img/heros/hero-16.png";
import hero17 from "../../assets/img/heros/hero-17.png";
import hero18 from "../../assets/img/heros/hero-18.png";
import hero19 from "../../assets/img/heros/hero-19.png";
import hero20 from "../../assets/img/heros/hero-20.png";
import hero21 from "../../assets/img/heros/hero-21.png";
import hero22 from "../../assets/img/heros/hero-22.png";
import hero23 from "../../assets/img/heros/hero-23.png";
import hero24 from "../../assets/img/heros/hero-24.png";

const heroes = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
  hero12,
  hero13,
  hero14,
  hero15,
  hero16,
  hero17,
  hero18,
  hero19,
  hero20,
  hero21,
  hero22,
  hero23,
  hero24,
];

export const Market = () => {
  return (
    <div className="container">
      <h1 style={{ color: "#fff", textAlign: "center", fontSize: "40px" }}>
        MARKET
      </h1>
      <Row gutter={12}>
        {heroes.map((hero, index) => (
          <Col xs={24} xl={6}>
            <HeroCard img={hero} key={index} id={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
