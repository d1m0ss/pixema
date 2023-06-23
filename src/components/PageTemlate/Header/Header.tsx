import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSearchValue } from "../../../store/useful/actions";
import {
  fetchDatatRefreshAction,
  fetchMovie,
} from "../../../store/movies/actions";
import { SearchField } from "../../SearchField/SearchField";
import { UserInfo } from "../../UserInfo/UserInfo";
import "./Header.scss";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector((state) => state.usefuls);

  let timeout: any = null;
  const hendleSearchChange = (value: string) => {
    clearTimeout(timeout);
    if (value) {
      timeout = setTimeout(() => {
        dispatch(setSearchValue(value));
        dispatch(fetchMovie(`&s=${value}`));
      }, 800);
    } else {
      dispatch(setSearchValue(""));
      dispatch(fetchDatatRefreshAction());
    }
  };

  return (
    <section className="header">
      <div className="header__search-wrapper">
        <SearchField onChangeValue={hendleSearchChange} />
      </div>
      <div className="header__ui-wrapper">
        <UserInfo />
      </div>
    </section>
  );
};
