import { HERO, LAND_TYPES, NFT, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./cardStyle.scss";

export const LandComponent = ({ land }: { land: any }) => {
	return (
		// <Link to={`/detail/${id ?? 1}`}>
		<Link to={``}>
			<div className="card-custom nft-land">
				<img src={land.url} alt="img" />
				<h4 className="land_id">ID: {land.id.toString()}</h4>
				<h4 className="title">{land.title}</h4>
				{/* <div className="content">
					<div className="info-content">
						<div>Price</div>
						<div>$WARZ {price}</div>
					</div>
					<div className="info-content">
						<div>Created</div>
						<div>{created}</div>
					</div>
				</div> */}
			</div>
		</Link>
	);
};
