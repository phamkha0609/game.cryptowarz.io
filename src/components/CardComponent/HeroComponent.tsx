import { KING_TYPES } from "configs/constants";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

export const HeroComponent = ({ king }: { king: any }) => {
	return (
		// <Link to={`/detail/${id ?? 1}`}>
		<Link to={``}>
			<div className="card-custom nft-hero">
				<img src={king.url} alt="image" />
				<h4 className="land_id">ID: {king.id.toString()}</h4>
				<h4 className="title">{KING_TYPES[king.nftClass]}</h4>
				<div className="content">
					<div className="info-content">
						<div>Healthy</div>
						<div>{king.stats?.healthy}</div>
					</div>
					<div className="info-content">
						<div>Mana</div>
						<div>{king.stats?.mana}</div>
					</div>
					<div className="info-content">
						<div>Attack</div>
						<div>{king.stats?.attack}</div>
					</div>
					<div className="info-content">
						<div>Defense</div>
						<div>{king.stats?.defense}</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
