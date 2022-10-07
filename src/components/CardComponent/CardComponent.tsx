import { BOX_NAMES, HERO, NFT, _NFT } from "configs/constants";
import { BigNumber } from "ethers";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./cardStyle.scss";
import b1 from "../../assets/img/bd1.png";
import b2 from "../../assets/img/box/box-2.png";
import { formatEther, parseEther } from "ethers/lib/utils";

export const CardComponent = ({
	id,
	title,
	box,
	handleClick,
}: {
	id: number;
	title: string,
	box: any;
	handleClick: (id: number) => any;
}) => {
	useEffect(() => {});

	return (
		// <Link to={`/detail/${id ?? 1}`}>
		<Link to={``}>
			<div className="card-custom">
				<img src={id === 0 ? b1 : b2} alt="img" />
				<h4 className="title">{title}</h4>
				<div className="content">
					<div className="info-content">
						<div>Price;</div>
						<div>
							{parseFloat(formatEther(box.tokenFee?.toString() ?? "0")).toFixed(
								3
							)}{" "}
							WARZ &#61; 30BUSD
						</div>
					</div>
					<div className="info-content">
						<div>Created</div>
						{/* <div>{box.created.toString()}</div> */}
					</div>
					<div className="info-content">
						<div>Limit</div>
						{/* <div>{box.limit.toString()}</div> */}
					</div>
					<div className="info-content">
						<div>Payment</div>
						<div>$WARZ</div>
					</div>
				</div>
				<div className="footer">
					<button
						onClick={() => {
							handleClick(id);
						}}
					>
						Buy
					</button>
				</div>
			</div>
		</Link>
	);
};
