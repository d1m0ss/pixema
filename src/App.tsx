import { useState } from "react";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { Tabs } from "./components/Tabs/Tabs";
import { Select } from "./components/Select/Select";
import { Option } from "./components/Select/Option/Option";

export const App = () => {
  const [name, setName] = useState<string>("");
  const handleChangeName = (newName: string) => {
    setName(newName);
  };
  return (
    <div className="app">
      <PageTemlate>
        <Input title="Name" value={name} handleChange={handleChangeName} placeholder="Placeholder" errorMessage="Error text" />
        <Input title="Name" value={name} handleChange={handleChangeName} placeholder="Placeholder" isDisabled />
        <Tabs>
          {"text1"}
          {"text2"}
        </Tabs>
        <Select placeholder="Choose">
          <Option text="Audi" />
          <Option text="BMW" />
          <Option text="Citroen" />
          <Option text="Ford" />
          <Option text="Honda" />
          <Option text="Jaguar" />
          <Option text="Land Rover" />
          <Option text="Mercedes" />
          <Option text="Mini" />
          <Option text="Nissan" />
          <Option text="Toyota" />
          <Option text="Volvo" />
        </Select>
      </PageTemlate>
    </div>
  );
};
