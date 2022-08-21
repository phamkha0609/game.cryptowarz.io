import { HERO, NFT, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

export const CardComponent = ({
  bg,
  content,
  id,
  nft,
  sc,
  hero,
  price,
  created,
  limit,
  inMarket = true,
  stateChanger,
  changeLoading,
}: {
  bg: any;
  content?: string;
  id?: number;
  nft?: _NFT;
  hero?: { balance: BigNumber; nft: NFT; hero: HERO; image: string };
  sc?: string;
  price?: number;
  created?: number;
  limit?: number;
  inMarket?: boolean;
  stateChanger?:any;
  changeLoading?:any
}) => {

  const showLoading = () => {
    changeLoading(true);
  }

  return (
    // <Link to={`/detail/${id ?? 1}`}>
    <Link to={``}>
      <div className="card-custom">
        <img src={sc} alt="image" />
        <h4 className="title">{content}</h4>
        <div className="content">
          <div className="info-content">
            <div>Price</div>
            <div>$WARZ 48,000</div>
          </div>
          <div className="info-content">
            <div>Created</div>
            <div>12,000</div>
          </div>
          <div className="info-content">
            <div>Limit</div>
            <div>8,000</div>
          </div>
          <div className="info-content">
            <div>Payment</div>
            <div>$WARZ</div>
          </div>
        </div>
        <div className="footer">
          <button onClick={() => {
            showLoading();
          }}>Open</button>
        </div>
      </div>

    </Link>
  );
};
