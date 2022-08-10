import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({ img, id }: { img: any; id: number }) => {
  return (
    <Link to={`/detail/${id}`}>
      <img className="hero-thumbnail" src={img} alt="" />
    </Link>
  );
};
