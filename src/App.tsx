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
import { getTitleMovies } from "./api/getTitleMovies";
import { titleMovies } from "./mock";
import { IMovie } from "./store/movies/interfaces";
import { TitleMovies } from "./components/TitleMovies/TitleMovies";

export const App = () => {
  const [select, setSelect] = useState<string[]>([]);
  const [titleMovie, setTitleMovie] = useState<IMovie[]>([]);
  // const handleMultiSelect = (text: string) => {
  //   setSelect((prev) => [...prev, text]);
  // };

  useEffect(() => {
    // setTitleMovie(getTitleMovies(titleMovies));
    console.log(titleMovie);

    return () => {};
  }, []);
  return (
    <div className="app">
      <Provider store={store}>
        {/* <Selects
          isMulti
          title="Filter"
          onSelect={(text) => handleMultiSelect(text)}
        />
        <Selects title="Filter" />
        <UserInfo />
        <Input />
        <ColorTabs />
        <Buttons />
        <VariantButtonGroup />
        <Search />
        <CustomizedSwitches />
        <ActionAreaCard /> */}
        <PageTemlate>
          {/* <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard /> */}
          <TitleMovies/>
        </PageTemlate>
      </Provider>
    </div>
  );
};
