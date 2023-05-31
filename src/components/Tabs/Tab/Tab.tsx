import { FC, MouseEvent } from "react";
import "./Tab.scss";

interface ITab {
  key: number;
  title: string;
  isActive?: boolean;
}

export const Tab: FC<ITab> = ({ key, title, isActive }) => {
  const handleActive = (e: any) => {
    if (e.target && e.target.parentNode) {
      e.target.parentNode.childNodes.forEach((tab: any) => {
        tab.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  };

  return (
    <li className={`tabs__tab ${isActive && "active"}`} key={key} onClick={(e) => handleActive(e)}>
      {title}
    </li>
  );
};
