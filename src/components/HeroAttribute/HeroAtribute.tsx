import { Space } from "antd";
import { HERO, _HERO, _NFT } from "configs/constants";
import React from "react";
import { BoxDropInfo as BoxDropType } from "types/BoxDropInfo";

export const HeroAtribute = ({ hero }: { hero: _HERO | undefined }) => {
	return (
		<div className="box-drop-info">
			<h2>Hero Attribute</h2>
			<Space className="drop-item">
				<span className="title common-color">Attack</span>
				<span className="percent">{hero?.stats.attack}</span>
			</Space>
			<Space className="drop-item">
				<span className="title rare-color">Defense</span>
				<span className="percent">{hero?.stats.defense}</span>
			</Space>
			<Space className="drop-item">
				<span className="title supper-rare-color">Speed</span>
				<span className="percent">{hero?.stats.speed}</span>
			</Space>
			<Space className="drop-item">
				<span className="title epic-color">Stamina</span>
				<span className="percent">{hero?.stats.stamina}</span>
			</Space>
			<Space className="drop-item">
				<span className="title legend-color">Range</span>
				<span className="percent">{hero?.stats.range}</span>
			</Space>
		</div>
	);
};
