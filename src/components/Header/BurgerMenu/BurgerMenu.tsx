import "./BurgerMenu.scss";
import { FC } from "react";

interface IBurgerBtn {
  onClick: () => void;
}

export const BurgerBtn: FC<IBurgerBtn> = ({ onClick }) => {
  const handleClick = (e: any) => {
    e.target.classList.toggle("active");
    onClick();
  };

  return (
    <div className="burger-btn" onClick={handleClick}>
      <div className="burger-btn__dash"></div>
    </div>
  );
};
