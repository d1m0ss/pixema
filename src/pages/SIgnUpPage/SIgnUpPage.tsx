import { FC } from "react";
import "./SIgnUpPage.scss";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";

interface ISIgnUpPage {}

export const SIgnUpPage: FC<ISIgnUpPage> = () => {
  return (
    <Forma name="Sign Up" type="Sign Up">
      <label htmlFor="name">
        <h3>Name</h3>
        <Input title="Name" type="text" />
      </label>
      <label htmlFor="email">
        <h3>Email</h3>
        <Input title="Email" type="email" />
      </label>
      <label htmlFor="email">
        <h3>Password</h3>
      <Input title="Password" type="password" />
      </label>
      <label htmlFor="email">
        <h3>Confirm password</h3>
      <Input title="Confirm password" type="password" />
      </label>
    </Forma>
  );
};
