import { FC, useState } from "react";
import { IconButton } from "../IconButton/IconButton";
import { useAppContext } from "../AppContext/AppContext";
import { BurgerBtn } from "./BurgerMenu/BurgerMenu";
import "./Header.scss";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

interface IHeader {}

export const Header: FC<IHeader> = () => {
  const { setSearchTitle } = useAppContext();
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleToggleClick = () => {
    setOpenSearch(!openSearch);
    setSearchValue("");
  };

  const handleChangeSearch = (newValue: string) => {
    setSearchValue(newValue);
    setSearchTitle(newValue);
  };
  const handleToggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  return (
    <header className="header">
      <BurgerBtn onClick={handleToggleMenu} />
      <article className={`header__menu-wrapper${openMenu ? "--active" : ""}`}>
        <HeaderMenu />
      </article>
      {openSearch && (
        <div className="header__input-wrapp">
          <input
            type="text"
            className="header__search-input"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
          <IconButton onClick={handleToggleClick}>
          </IconButton>
        </div>
      )}
      <div className="header__box">
        <div className="header__serch">
          <IconButton onClick={handleToggleClick}>
          </IconButton>
        </div>
      </div>
    </header>
  );
};
