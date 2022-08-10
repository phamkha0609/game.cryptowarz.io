import React from "react";
import "./gameButton.scss";

export const GameButton = ({
  children,
  className,
  onClick,
}: {
  children: any;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`button-49 ${className}`}
      role="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
