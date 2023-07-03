import { FC } from "react";
import "./ConfirmPage.scss";
import { Input } from "../../components/Input/Input";
import { Button } from "@mui/material";
import { Forma } from "../../components/Forma/Forma";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface IConfirmPage {}

export const ConfirmPage: FC<IConfirmPage> = () => {
  const { emailValue } = useAppSelector((state) => state.usefuls);
  const navigate = useNavigate();
  return (
    <Forma
      name="Confirm Registration"
      type="Registration Confirm"
      handleSubmit={() => navigate("/authentication/sign-in")}
    >
      <span style={{ textAlign: "center" }}>
        Please activate your account with <br />
        the activation link in the email <b>{emailValue}</b> <br /> please check your
        email
      </span>
    </Forma>
  );
};
