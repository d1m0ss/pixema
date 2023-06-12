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
import { getPosts } from "./api/getPosts";

export const App = () => {
  const [select, setSelect] = useState<string[]>([]);
  // const handleMultiSelect = (text: string) => {
  //   setSelect((prev) => [...prev, text]);
  // };
  useEffect(() => {
    const posts = getPosts();
    // console.log(posts);
    return () => {};
  }, [select]);
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
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
          <ActionAreaCard />
        </PageTemlate>
      </Provider>
    </div>
  );
};
