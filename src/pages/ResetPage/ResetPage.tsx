import { FC } from "react";
import "./ResetPage.scss";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";

interface IResetPage {}

export const ResetPage: FC<IResetPage> = () => {
  return (
    <Forma name="Reset password" type="Reset password">
      <Input title="Email" type="email" />
    </Forma>
  );
};
