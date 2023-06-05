import { FC } from "react";
import "./Choosen.scss";

interface IChoosen {
  text: string;
}

export const Choosen: FC<IChoosen> = ({ text }) => <div>{text}</div>;
