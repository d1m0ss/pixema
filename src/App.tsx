import { useState } from "react";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { Tabs } from "./components/Tabs/Tabs";
import { Select } from "./components/Select/Select";
import { Button } from "./components/Button/Button";
import { Search } from "./components/Secrch/Search";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  const [name, setName] = useState<string>("");
  const handleChangeName = (newName: string) => {
    setName(newName);
  };
  return (
    <div className="app">
      <Provider store={store}>
        <PageTemlate>
          <Input
            title="Name"
            value={name}
            handleChange={handleChangeName}
            placeholder="Placeholder"
            errorMessage="Error text"
          />
          <Input
            title="Name"
            value={name}
            handleChange={handleChangeName}
            placeholder="Placeholder"
            isDisabled
          />
          <Tabs>
            {"text1"}
            {"text2"}
          </Tabs>
          <Select isMulty>
            {[
              "Audi",
              "BMW",
              "Citroen",
              "Ford",
              "Honda",
              "Jaguar",
              "Land Rover",
              "Mercedes",
              "Mini",
              "Nissan",
              "Toyota",
              "Volvo",
            ]}
          </Select>
          <Button content="Primary" onClick={() => {}} type="primary" />
          <Button content="Secondary" onClick={() => {}} type="secondary" />
          <Search />
        </PageTemlate>
      </Provider>
    </div>
  );
};
