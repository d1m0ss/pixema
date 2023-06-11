import { FC } from "react";
import "./Header.scss";
import { PixemaLogo } from "../../../assets/icon/icons";
import Search from "../../Search/Search";
import { UserInfo } from "../../UserInfo/UserInfo";

export const Header: FC = () => {
  return (
    <section className="header">
      <div className="header__search-wrapper">
        <Search />
      </div>
      <div className="header__ui-wrapper">
        <UserInfo />
      </div>
    </section>
  );
};
