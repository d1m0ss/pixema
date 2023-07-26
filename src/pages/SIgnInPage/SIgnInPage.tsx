import { useNavigate } from "react-router-dom";
import { FC, useState } from "react";

import { setLoggedAction } from "../../store/auth/actions";
import { useAppDispatch } from "../../store/hooks";

import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";
import { postLogin } from "../../api/auth/postLogin";
import { CircularProgress } from "@mui/material";

import "./SIgnInPage.scss";

interface IErrors {
  email: string;
  password: string;
  detail: string;
}
export const SIgnInPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<IErrors>({
    email: "",
    password: "",
    detail: "",
  });

  const isFormValid = (): boolean => {
    const newErrors: IErrors = {
      email: "",
      password: "",
      detail: "",
    };

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must have at least 8 characters long";
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

  const isFieldsEmpty = () => !email || !password;

  const handle = {
    changeEmail: (value: string) => {
      setErrors((prev) => ({ ...prev, email: "", detail: "" }));
      setEmail(value);
    },
    changePassword: (value: string) => {
      setErrors((prev) => ({ ...prev, password: "", detail: "" }));
      setPassword(value);
    },
    submit: () => {
      if (isFormValid()) {
        setIsLoading(true);
        postLogin({ email, password })
          .then((data) => {
            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh__token", data.refresh);
            dispatch(setLoggedAction());
            navigate("/pixema/home");
          })
          .catch((error) => {
            setErrors((prev) => ({ ...prev, ...error.response.data }));
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    },
  };

  return (
    <>
      {isLoading ? (
        <Forma type="New password" name="Loading" isDisabled>
          <h4>Sending a request</h4>
          <article className="loading">
            <CircularProgress color="info" />
          </article>
        </Forma>
      ) : (
        <Forma
          name="Sign In"
          type="Sign In"
          handleSubmit={handle.submit}
          isDisabled={
            (false && !Object.values(errors).every((error) => !error)) ||
            isFieldsEmpty()
          }
        >
          <Input
            title="Email"
            type="email"
            errorMessage={errors.email}
            handleChange={(e) => handle.changeEmail(e.target.value)}
          />
          <Input
            title="Password"
            type="password"
            errorMessage={errors.password}
            handleChange={(e) => handle.changePassword(e.target.value)}
          />
          {errors.detail && <h2 className="sign-in__error">{errors.detail}</h2>}
        </Forma>
      )}
    </>
  );
};
