import { Typography } from "antd";
import React from "react";
import "./titleStyle.scss";

export const TitleComponent = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="titleComponent">
      <div className="subtitle">
        {" "}
        <span style={{ color: "#00ffff" }}>#</span>
        {subtitle}
      </div>
      <Typography.Title level={1} style={{ color: "#fff", fontSize: "40px" }}>
        {title}
      </Typography.Title>
    </div>
  );
};
