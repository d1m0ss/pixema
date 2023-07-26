import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";

import { Forma } from "../../components/Forma/Forma";

export const ConfirmPage: FC = () => {
  const navigate = useNavigate();

  const { email } = useAppSelector((state) => state.user);

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
