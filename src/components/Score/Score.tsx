import { FC } from "react";

import "./Score.scss";

interface IScore {
  children: string;
}

export const Score: FC<IScore> = ({ children }) => {
  return (
    <div className="score">
      <span
        className={`score__value ${
          children !== "N/A" ? (+children >= 7 ? "green" : "red") : "grey"
        }`}
      >
        {children}
      </span>
    </div>
  );
};
