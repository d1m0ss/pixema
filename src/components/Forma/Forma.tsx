import { FC, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
import "./Forma.scss";

interface IForma {
  children?: ReactNode;
  name?: string;
  type:
    | "Sign In"
    | "Sign Up"
    | "Reset password"
    | "New password"
    | "Registration Confirm";
  isDisabled?: boolean;
  text?: string;
  handleSubmit?: () => void;
}

export const Forma: FC<IForma> = ({
  children,
  name = "Forma",
  type,
  text,
  isDisabled = false,
  handleSubmit = () => {},
}) => {
  const navigate = useNavigate();
  return (
    <form className="forma">
      <fieldset className="forma__field">
        <legend className="forma__legend">{name}</legend>
        <article className="forma__body">
          {text && <span className="forma__text">{text}</span>}

          {children}

          {type === "Sign In" && (
            <Button
              sx={{
                cursor: "pointer",
                width: "max-content",
                textTransform: "capitalize",
                color: "#80858B",
              }}
              onClick={() => navigate("/authentication/reset-password")}
            >
              Forgot password?
            </Button>
          )}

          {
            <Button
              disabled={isDisabled}
              type="reset"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              sx={{
                "&:hover": {
                  color: "#7B61FF",
                  backgroundColor: "transparent",
                },
                color: "white",
                textTransform: "capitalize",
                font: 'normal 600 16px/24px "Exo 2"',
                padding: "16px 0",
                borderRadius: "10px",
                backgroundColor: "#7B61FF",
              }}
            >
              {name}
            </Button>
          }

          {type === "Sign In" ? (
            <span className="forma__check">
              Don’t have an account?{" "}
              <Link to={"/authorisation/sign-up"} className="forma__link">
                {" "}
                Sign Up
              </Link>
            </span>
          ) : (
            type !== "New password" &&
            type !== "Reset password" && (
              <span className="forma__check">
                Already have an account?{" "}
                <Link to={"/authentication/sign-in"} className="forma__link">
                  {" "}
                  Sign In
                </Link>
              </span>
            )
          )}
        </article>
      </fieldset>
    </form>
  );
};
