import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { setUserEmailAction } from "../../store/user/actions";
import { useAppDispatch } from "../../store/hooks";

import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";
import { postNewUser } from "../../api/postNewUser";

interface IError {
  username: string;
  email: string;
  password: string;
  confirmPass: string;
}

export const SIgnUpPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isPasswordsSame, setIsPasswordsSame] = useState(false);
  const [errors, setErrors] = useState<IError>({
    username: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const isFormValid = (): boolean => {
    const newErrors: IError = {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    };

    if (!username) newErrors.username = "Name is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must have at least 8 characters long";
      newErrors.confirmPass = "Password must have at least 8 characters long";
    }

    if (!confirmPass) {
      newErrors.confirmPass = "Confirm password is required";
    } else if (!isPasswordsSame) {
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

  const isFieldsEmpty = () => !username || !email || !password || !confirmPass;

  const handle = {
    ChangeName: (value: string) => {
      setErrors((prev) => ({ ...prev, username: "" }));
      setUserName(value);
    },
    ChangeEmail: (value: string) => {
      setErrors((prev) => ({ ...prev, email: "" }));
      setEmail(value);
    },
    ChangePassword: (value: string) => {
      setErrors((prev) => ({ ...prev, password: "" }));
      setPassword(value);
    },
    ChangeConfirmPass: (value: string) => {
      setErrors((prev) => ({ ...prev, confirmPass: "" }));
      setConfirmPass(value);
    },
    submit: () => {
      if (isFormValid()) {
        postNewUser({ email, password, username })
          .then(() => {
            navigate("/authorisation/confirm");
            dispatch(setUserEmailAction(email));
          })
          .catch((error) =>
            setErrors((prev) => ({ ...prev, ...error.response.data }))
          );
      }
    },
  };

  useEffect(() => {
    password === confirmPass && password
      ? setIsPasswordsSame(true)
      : setIsPasswordsSame(false);
  }, [password, confirmPass]);

  return (
    <Forma
      name="Sign Up"
      type="Sign Up"
      handleSubmit={handle.submit}
      isDisabled={
        true &&
        (isFieldsEmpty() || !Object.values(errors).every((error) => !error))
      }
    >
      <label htmlFor="name">
        <Input
          title="Name"
          type="text"
          value={username.trimStart()}
          handleChange={(e: any) => handle.ChangeName(e.target.value)}
          errorMessage={errors.username}
        />
      </label>
      <label htmlFor="email">
        <Input
          title="Email"
          type="email"
          value={email.trim()}
          handleChange={(e: any) => handle.ChangeEmail(e.target.value)}
          errorMessage={errors.email}
        />
      </label>
      <label htmlFor="password">
        <Input
          title="Password"
          type="password"
          value={password.trim()}
          handleChange={(e: any) => handle.ChangePassword(e.target.value)}
          errorMessage={errors.password}
        />
      </label>
      <label htmlFor="password">
        <Input
          title="Confirm password"
          type="password"
          value={confirmPass.trim()}
          handleChange={(e: any) => handle.ChangeConfirmPass(e.target.value)}
          errorMessage={errors.confirmPass}
        />
      </label>
    </Forma>
  );
};
