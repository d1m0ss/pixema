import { FC } from "react";
import "./SIgnInPage.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "@mui/material";
import { Forma } from "../../components/Forma/Forma";

interface ISIgnInPage {}

export const SIgnInPage: FC<ISIgnInPage> = () => {
  return (
    <Forma name="Sign In" type="Sign In">
      <Input title="Email" type="email" />
      <Input title="Password" type="password" />
    </Forma>
  );
};
