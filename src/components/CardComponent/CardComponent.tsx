import { HERO, NFT, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

export const CardComponent = ({
  bg,
  content,
  id,
  nft,
  sc,
  hero,
  inMarket = true,
}: {
  bg: any;
  content?: string;
  id?: number;
  nft?: _NFT;
  hero?: { balance: BigNumber; nft: NFT; hero: HERO; image: string };
  sc?: string;
  inMarket?: boolean;
}) => {
  return (
    // <Link to={`/detail/${id ?? 1}`}>
    <Link to={``}>
      <div className="card-custom">
        <div className="content">
          {/* <div className="header">Box</div> */}

          <div className="footer">
            {/* <div className="name">COMMON</div> */}
            {!inMarket && (
              <div className="quantity">
                YOU HAVE: <br />#{hero?.balance.toString()}
              </div>
            )}
          </div>
        </div>
        <img src={sc} alt="image" />
      </div>
    </Link>
  );
};
