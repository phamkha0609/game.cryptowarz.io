import { Button, Checkbox, Col, Row, Space, Typography } from "antd";
import { GameButton2 } from "components/GameButton2/GameButton2";
import React from "react";
import "./filter.scss";

export const Filter = () => {
  return (
    <div className="filter-box">
      <Row>
        <Col span={24} style={{ marginBottom: "2em" }}>
          <Space style={{ width: "100%", justifyContent: "space-between" }}>
            <Typography.Title level={4} style={{ color: "#fff" }}>
              Filter
            </Typography.Title>
            <Button type="text">Clear</Button>
          </Space>
        </Col>
        <Col span={12} style={{ marginBottom: "1em" }}>
          <Checkbox>COMMON</Checkbox>
        </Col>
        <Col span={12}>
          <Checkbox>RARE</Checkbox>
        </Col>
        <Col span={12} style={{ marginBottom: "1em" }}>
          <Checkbox>SUPER RARE</Checkbox>
        </Col>
        <Col span={12}>
          <Checkbox>EPIC</Checkbox>
        </Col>
        <Col span={12} style={{ marginBottom: "1em" }}>
          <Checkbox>LEGEND</Checkbox>
        </Col>

        <Space
          style={{ width: "100%", justifyContent: "center", marginTop: "1em" }}
        >
          <GameButton2>APPLY FILTER</GameButton2>
        </Space>
      </Row>
    </div>
  );
};
