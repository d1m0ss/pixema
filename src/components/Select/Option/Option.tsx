import { FC } from "react";
import "./Option.scss";

interface IOption {
  children: string;
  onClickSelect?: (e: any) => void;
}

export const Option: FC<IOption> = ({ children, onClickSelect }) => {
  return (
    <button className="select__item" type="button" onClick={onClickSelect}>
      {children}
    </button>
  );
};
