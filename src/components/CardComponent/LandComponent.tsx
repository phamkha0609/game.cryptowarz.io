import { HERO, NFT, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

export const LandComponent = ({
  name,
  src,
  price,
  created
}: {
  name?: string;
  src?: string;
  price?: number;
  created?: number;
}) => {

  return (
    // <Link to={`/detail/${id ?? 1}`}>
    <Link to={``}>
      <div className="card-custom nft-land">
        <img src={src} alt="image" />
        <h4 className="title">{name}</h4>
        <div className="content">
          <div className="info-content">
            <div>Price</div>
            <div>$WARZ {price}</div>
          </div>
          <div className="info-content">
            <div>Created</div>
            <div>{created}</div>
          </div>
        </div>
      </div>

    </Link>
  );
};
