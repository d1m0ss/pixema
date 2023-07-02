import { FC, ReactNode } from "react";
import "./Forma.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

interface IForma {
  children?: ReactNode;
  name?: string;
  type: "Sign In" | "Sign Up" | "Reset password" | "New password";
}

export const Forma: FC<IForma> = ({ children, name = "Forma", type }) => {
  return (
    <form action="" method="post" className="forma">
      <fieldset className="forma__field">
        <legend className="forma__legend">{name}</legend>
        <article className="forma__body">
          {
            <>
              {children}
              {type === "Sign In" && (
                <Button
                  sx={{
                    cursor: "pointer",
                    width: "max-content",
                    textTransform: "capitalize",
                    color: "#80858B",
                  }}
                >
                  Forgot password?
                </Button>
              )}
              {
                <Button
                  type="submit"
                  onClick={(e) => e.preventDefault()}
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
                <span className="forma__check">
                  Already have an account?{" "}
                  <Link to={"/authorisation/sign-in"} className="forma__link">
                    {" "}
                    Sign In
                  </Link>
                </span>
              )}
            </>
          }
        </article>
      </fieldset>
    </form>
  );
};
