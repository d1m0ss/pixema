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
        <Select placeholder="Choose" isMulty>
          {['Audi','BMW','Citroen','Ford','Honda','Jaguar','Land Rover','Mercedes','Mini','Nissan','Toyota','Volvo']}
        </Select>
      </PageTemlate>
    </div>
  );
};
