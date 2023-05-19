import { useState } from "react";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";
import { Tabs } from "./components/Tabs/Tabs";
import { Tab } from "./components/Tabs/Tab/Tab";

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
      </PageTemlate>
    </div>
  );
};
