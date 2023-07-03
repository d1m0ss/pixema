import { FC, useEffect, useState } from "react";
import "./SIgnUpPage.scss";
import { Input } from "../../components/Input/Input";
import { Forma } from "../../components/Forma/Forma";
import { useNavigate } from "react-router-dom";
import { postNewUser } from "../../api/postNewUser";
import { useAppDispatch } from "../../store/hooks";
import { setEMAILValue } from "../../store/useful/actions";

interface ISIgnUpPage {}

export const SIgnUpPage: FC<ISIgnUpPage> = () => {
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

  interface IError {
    username: string;
    email: string;
    password: string;
    confirmPass: string;
  }

  const isFormValid = (): boolean => {
    const newErrors: IError = {
      username: "",
      email: "",
      password: "",
      confirmPass: "",
    };

    if (!username) {
      newErrors.username = "Name is required";
    }

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
      return true;
    } else {
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      postNewUser({ email, password, username })
        .then(() => {
          navigate("/authorisation/confirm");
          dispatch(setEMAILValue(email));
        })
        .catch((error) =>
          setErrors((prev) => ({ ...prev, ...error.response.data }))
        );
    }
  };

  useEffect(() => {
    password === confirmPass && password
      ? setIsPasswordsSame(true)
      : setIsPasswordsSame(false);
  }, [username, email, password, confirmPass]);

  return (
    <Forma
      name="Sign Up"
      type="Sign Up"
      handleSubmit={handleSubmit}
      isDisabled={false}
    >
      <label htmlFor="name">
        <h3>Name</h3>
        <Input
          title="Name"
          type="text"
          handleChange={(e: any) => setUserName(e.target.value)}
          errorMessage={errors.username}
        />
      </label>
      <label htmlFor="email">
        <h3>Email</h3>
        <Input
          title="Email"
          type="email"
          handleChange={(e: any) => setEmail(e.target.value)}
          errorMessage={errors.email}
        />
      </label>
      <label htmlFor="email">
        <h3>Password</h3>
        <Input
          title="Password"
          type="password"
          handleChange={(e: any) => setPassword(e.target.value)}
          errorMessage={errors.password}
        />
      </label>
      <label htmlFor="email">
        <h3>Confirm password</h3>
        <Input
          title="Confirm password"
          type="password"
          handleChange={(e: any) => setConfirmPass(e.target.value)}
          errorMessage={errors.confirmPass}
        />
      </label>
    </Forma>
  );
};
