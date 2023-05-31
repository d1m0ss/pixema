import { FC } from "react";
import "./Option.scss";

interface IOption {
  text: string;
}

export const Option: FC<IOption> = ({ text }) => {
  return (
    <button className="select__item" type="button">
      {text}
    </button>
  );
};
