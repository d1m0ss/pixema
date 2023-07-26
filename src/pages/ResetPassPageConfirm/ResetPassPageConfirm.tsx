import { FC, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { resetPasswordConfirm } from "../../api/auth/resetPasswordConfirm";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";

import "./ResetPassPageConfirm.scss";

interface IError {
  password: string;
  confirmPass: string;
}

export const ResetPassPageConfirm: FC = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const [new_password, setNewPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isActivate, setIsActivate] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<IError>({
    password: "",
    confirmPass: "",
  });

  const handle = {
    changePassword: (value: string) => {
      setPassword(value);
      setNewPassword(value)
    },
    changePasswordConfirm: (value: string) => {
      setConfirmPassword(value);
    },
    submit: () => {
      if (isPassValid()) {
        setIsLoading(true);
        uid &&
          token &&
          resetPasswordConfirm({ uid, token, new_password })
            .then(() => {
              setIsActivate(true);
            })
            .catch((error) => {
              setIsError(true);
              setErrors((prev) => ({ ...prev, ...error.response.data }));
            })
            .finally(() => setIsLoading(false));
      }
    },
    success: () => {
      navigate("/authentication/sign-in");
    },
  };

  const isPassValid = () => {
    const newErrors: IError = {
      password: "",
      confirmPass: "",
    };

    if (!password) {
      newErrors.password = "Password is required";
    }

    if (!confirmPassword) {
      newErrors.confirmPass = "Confirm password is required";
    }

    if (password !== confirmPassword) {
      newErrors.password = "Passwords are not the same";
      newErrors.confirmPass = "Passwords are not the same";
    }

    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      setErrors(newErrors);
      return true;
    } else {
      setErrors(newErrors);
      return false;
    }
  };

  const isFieldsEmpty = () => !password || !confirmPassword;

  return (
    <>
      {isLoading && (
        <Forma type="New password" name="Loading..." isDisabled>
          <h2>Sending a request</h2>
        </Forma>
      )}
      {isActivate && !isLoading && (
        <Forma
          type="Reset password"
          name="Success"
          handleSubmit={handle.success}
        >
          <h4>
            Success your password <br /> Has changed
          </h4>
        </Forma>
      )}
      {!isActivate && !isLoading && !isError && (
        <Forma
          name="Set new password"
          type="New password"
          handleSubmit={handle.submit}
          isDisabled={
            true &&
            (isFieldsEmpty() || !Object.values(errors).every((error) => !error))
          }
        >
          <>
            <h2>Reset password</h2>
            <Input
              title="Password"
              type="password"
              errorMessage={errors.password}
              handleChange={(e) => {
                errors.password = "";
                handle.changePassword(e.target.value);
                
              }}
            />
            <Input
              title="Confirm password"
              type="password"
              errorMessage={errors.confirmPass}
              handleChange={(e) => {
                errors.confirmPass = "";
                handle.changePasswordConfirm(e.target.value);
              }}
            />
          </>
        </Forma>
      )}
      {isError && !isLoading && (
        <Forma type="New password" name="Error try again">
          <h2>Something went wrong, try again</h2>
        </Forma>
      )}
    </>
  );
};
