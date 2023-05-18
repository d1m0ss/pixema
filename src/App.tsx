import { useState } from "react";
import "./App.scss";
import { Input } from "./components/Input/Input";
import { PageTemlate } from "./components/PageTemlate/PageTemlate";

export const App = () => {
  const [name, setName] = useState<string>("");
  const handleChangeName = (newName: string) => {
    setName(newName);
  };
  return (
    <div className="app">
      <PageTemlate>
        <Input title="Name" value={name} handleChange={handleChangeName} placeholder="Placeholder" errorMessage="Error text"/>
        <Input title="Name" value={name} handleChange={handleChangeName} placeholder="Placeholder" isDisabled/>
      </PageTemlate>
    </div>
  );
};
