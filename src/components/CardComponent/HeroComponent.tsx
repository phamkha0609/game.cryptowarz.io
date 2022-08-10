import { HERO, NFT, _HERO, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import "./cardStyle.scss";
import heroImg from "../../assets/img/heros/hero-01.png";
import { Link } from "react-router-dom";

export const HeroComponent = ({
  hero,
  heroId,
  nftId,
  inMarket = true,
}: {
  nftId: number;
  heroId: number;
  content?: string;
  hero?: { balance: BigNumber; nft: NFT; hero: HERO; image: _HERO };
  inMarket?: boolean;
}) => {
  return (
    <Link to={`/detail-hero/${heroId}/${nftId}`}>
      <div className="card-hero">
        {/* <img src={inMarket ? nft?.image : hero?.image} alt="image" /> */}
        <img src={hero?.image?.image} alt="image" />
        <div className="footer">
          {!inMarket && (
            <div className="quantity">
              YOU HAVE: <br />#{hero?.balance.toString() || 0}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
