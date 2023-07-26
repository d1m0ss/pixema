import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  refreshPagesCount,
  setSearchValue,
} from "../../../store/useful/actions";
import {
  fetchDatatRefreshAction,
  fetchMovie,
} from "../../../store/movies/actions";
import { useAppDispatch } from "../../../store/hooks";

import { SearchField } from "../../SearchField/SearchField";
import { UserInfo } from "../../UserInfo/UserInfo";
import "./Header.scss";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let timeout: any = null;

  const handle ={ 
    searchChange: (value: string) => {
      clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => {
          dispatch(fetchDatatRefreshAction());
          navigate("/pixema/search");
          dispatch(setSearchValue(value));
          dispatch(fetchMovie(`&s=${value}`, "Search"));
          dispatch(refreshPagesCount());
        }, 800);
      } else {
        navigate("/pixema");
        dispatch(setSearchValue(""));
        dispatch(fetchDatatRefreshAction());
        dispatch(refreshPagesCount());
      }
    },
  click: (value: string) => {
      value && navigate("search");
    },
  }

  return (
    <section className="header">
      <div className="header__search-wrapper">
        <SearchField
          onChangeValue={handle.searchChange}
          onInputClick={handle.click}
        />
      </div>
      <div className="header__ui-wrapper">
        <UserInfo />
      </div>
    </section>
  );
};
