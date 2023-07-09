import { FC, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";
import "./ResetPassPage.scss";
import { resetPassword } from "../../api/auth/resetPassword";
import { useNavigate } from "react-router-dom";

export const ResetPassPage: FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");

  const handle = {
    changeEmail: (value: string) => {
      setEmail(value);
    },
    submit: () => {
      navigate('/authentication/sign-in')
      resetPassword({ email });
    },
  };

  return (
    <Forma
      name="Reset"
      type="New password"
      handleSubmit={handle.submit}
      isDisabled={false}
    >
      <>
        <h2>Reset password</h2>
        <Input
          title="Email"
          type="email"
          handleChange={(e) => handle.changeEmail(e.target.value)}
        />
      </>
    </Forma>
  );
};
