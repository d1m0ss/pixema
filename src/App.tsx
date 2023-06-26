import "./App.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { useEffect, useState } from "react";
// import { Selects } from "./components/Selects/Selects";
// import { Input } from "./components/Input/Input";
// import { ColorTabs } from "./components/Tabs/Tabs";
// import { Buttons } from "./components/Buttons/Buttons";
// import Search from "./components/Search/Search";
// import { CustomizedSwitches } from "./components/Switch/Switch";
// import { UserInfo } from "./components/UserInfo/UserInfo";
// import { VariantButtonGroup } from "./components/Buttons/ButtonsGroup/ButtonsGroup";
import { ActionAreaCard } from "./components/Card/Card";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { titleMovies } from "./mock";
import { IMovie } from "./store/movies/interfaces";
import { TitleMovies } from "./components/TitleMovies/TitleMovies";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { fetchMovie } from "./store/movies/actions";
import { Router } from "./routes/Router";

export const App = () => {
  const [select, setSelect] = useState<string[]>([]);
  const [titleMovie, setTitleMovie] = useState<IMovie[]>([]);
  // const handleMultiSelect = (text: string) => {
  //   setSelect((prev) => [...prev, text]);
  // };
  const dispatch = useAppDispatch();
  useEffect(() => {
    titleMovies.forEach((movieID) => {
      // dispatch(fetchMovie(`&i=${movieID}`));
    });
  }, []);

  return (
    <div className="app">
      <PageTemlate>
        <Router/>
        {/* <TitleMovies /> */}
      </PageTemlate>
    </div>
  );
};
