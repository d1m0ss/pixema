import { FC, useState } from "react";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";
import "./ResetPassPage.scss";
import { resetPassword } from "../../api/auth/resetPassword";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setUserEmailAction } from "../../store/user/actions";
import { CircularProgress } from "@mui/material";

interface IError {
  email: string;
}

export const ResetPassPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<IError>({ email: "" });

  const isFormValid = () => {
    const newErrors: IError = {
      email: "",
    };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
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

  const handle = {
    changeEmail: (value: string) => {
      setEmail(value);
    },
    submit: () => {
      if (isFormValid()) {
        // setIsLoading(true);
        resetPassword({ email })
          .then(() => {
            dispatch(setUserEmailAction(email));
            navigate("/authentication/check-email");
          })
          .catch((error) => {
            setErrors((prev) => ({ ...prev, ...error }));
          })
          .finally(() => {
            setIsLoading(true);
          });
      }
    },
  };

  return (
    <>
      {isLoading ? (
        <>
          <Forma type="New password" name="Loading" isDisabled>
            <h4>Sending a request</h4>
            <article className="loading">
              <CircularProgress color="info" />
            </article>
          </Forma>
        </>
      ) : (
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
              errorMessage={errors.email}
              handleChange={(e) => handle.changeEmail(e.target.value)}
            />
          </>
        </Forma>
      )}
    </>
  );
};
