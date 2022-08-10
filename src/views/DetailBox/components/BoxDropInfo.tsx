import { Space } from "antd";
import { HERO, _NFT } from "configs/constants";
import React from "react";
import { BoxDropInfo as BoxDropType } from "types/BoxDropInfo";

export const BoxDropInfo = ({ nft }: { nft: _NFT | undefined }) => {
  return (
    <div className="box-drop-info">
      <h2>Box drop detail</h2>
      <Space className="drop-item">
        <span className="title common-color">TAGGINS</span>
        <span className="percent">{nft?.heroDrops[HERO.TAGGINS] + "%"}</span>
      </Space>
      <Space className="drop-item">
        <span className="title rare-color">KARA</span>
        <span className="percent">{nft?.heroDrops[HERO.KARA] + "%"}</span>
      </Space>
      <Space className="drop-item">
        <span className="title supper-rare-color">FATE</span>
        <span className="percent">{nft?.heroDrops[HERO.FATE] + "%"}</span>
      </Space>
      <Space className="drop-item">
        <span className="title epic-color">SPARAS</span>
        <span className="percent">{nft?.heroDrops[HERO.SPARAS] + "%"}</span>
      </Space>
      <Space className="drop-item">
        <span className="title legend-color">GRAAFF</span>
        <span className="percent">{nft?.heroDrops[HERO.GRAAFF] + "%"}</span>
      </Space>
    </div>
  );
};
