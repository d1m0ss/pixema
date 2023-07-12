import { FC } from "react";
import "./Score.scss";

interface IScore {
  children: string;
}

export const Score: FC<IScore> = ({ children }) => {
  return (
    <div className="score">
      <span
        className="score__value"
        style={{
          backgroundColor: `${
            children !== "N/A" ? (+children >= 7 ? "#00A340" : "#F45D2D") : "#9e9e9e60"
          }`,
        }}
      >
        {children}
      </span>
    </div>
  );
};
