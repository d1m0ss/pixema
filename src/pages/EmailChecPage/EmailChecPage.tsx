import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { Forma } from "../../components/Forma/Forma";

export const EmailChecPage: FC = () => {
  const navigate = useNavigate();

  const handle = {
    submit: () => {
      navigate("/authentication/sign-in");
    },
  };
  return (
    <Forma type="New password" name="Success" handleSubmit={handle.submit}>
      <h2>Check your email</h2>
      <h3>
        The activation link has been sent to your E-mail,
        <br /> check it out
      </h3>
    </Forma>
  );
};
