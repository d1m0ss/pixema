import { FC } from "react";
import "./EmailChecPage.scss";
import { Forma } from "../../components/Forma/Forma";
import { useNavigate } from "react-router-dom";

interface IEmailChecPage {}

export const EmailChecPage: FC<IEmailChecPage> = () => {
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
