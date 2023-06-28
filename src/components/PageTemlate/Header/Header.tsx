import { FC, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  refreshPagesCount,
  setSearchValue,
} from "../../../store/useful/actions";
import {
  fetchDatatRefreshAction,
  fetchMovie,
} from "../../../store/movies/actions";
import { SearchField } from "../../SearchField/SearchField";
import { UserInfo } from "../../UserInfo/UserInfo";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let timeout: any = null;

  const hendleSearchChange = (value: string) => {
    clearTimeout(timeout);
    if (value) {
      timeout = setTimeout(() => {
        dispatch(fetchDatatRefreshAction());
        navigate("/search");
        dispatch(setSearchValue(value));
        dispatch(fetchMovie(`&s=${value}`, "Search"));
        dispatch(refreshPagesCount());
      }, 800);
    } else {
      navigate("");
      dispatch(setSearchValue(""));
      dispatch(fetchDatatRefreshAction());
      dispatch(refreshPagesCount());
    }
  };

  const handleClick = (value: string) => {
    value && navigate("/search");
  };

  return (
    <section className="header">
      <div className="header__search-wrapper">
        <SearchField
          onChangeValue={hendleSearchChange}
          onInputClick={handleClick}
        />
      </div>
      <div className="header__ui-wrapper">
        <UserInfo />
      </div>
    </section>
  );
};
