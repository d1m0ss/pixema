import "./App.scss";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { Selects } from "./components/Selects/Selects";
import { useEffect, useState } from "react";
import { Input } from "./components/Input/Input";
import { ColorTabs } from "./components/Tabs/Tabs";
import { Buttons } from "./components/Buttons/Buttons";
import Search from "./components/Search/Search";
import { CustomizedSwitches } from "./components/Switch/Switch";
import { ActionAreaCard } from "./components/Card/Card";
import { VariantButtonGroup } from "./components/Buttons/ButtonsGroup/ButtonsGroup";
import { UserInfo } from "./components/UserInfo/UserInfo";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";

export const App = () => {
  const [select, setSelect] = useState<string[]>([]);
  const handleMultiSelect = (text: string) => {
    setSelect((prev) => [...prev, text]);
  };
  useEffect(() => {
    console.log(select);
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
