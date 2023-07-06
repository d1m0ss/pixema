import { FC } from "react";
import "./ConfirmPage.scss";
import { Forma } from "../../components/Forma/Forma";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface IConfirmPage {}

export const ConfirmPage: FC<IConfirmPage> = () => {
  const { email } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  return (
    <Forma
      name="Confirm Registration"
      type="Registration Confirm"
      handleSubmit={() => navigate("/authentication/sign-in")}
    >
      <span>
        Please activate your account with <br />
        the activation link in the email <b>{email}</b> <br /> please check your
        email
      </span>
    </Forma>
  );
};
