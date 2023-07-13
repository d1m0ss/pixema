import { FC, useEffect, useState } from "react";

import { setDarkTheme, setLightTheme } from "../../store/theme/actions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { Alert, Button, CircularProgress } from "@mui/material";
import { setPassword } from "../../api/auth/setPassword";
import { Input } from "../../components/Input/Input";
import { Switch } from "@mui/material";

import "./SettingsPage.scss";

interface ISettingsPage {}
interface IError {
  new_password: string;
  confirm_password: string;
  current_password: string;
}

export const SettingsPage: FC<ISettingsPage> = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  const { theme } = useAppSelector((state) => state.theme);
  
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [current_password, setCorrentPassword] = useState("");
  const [isSuccessPassChange, setIsSuccessPassChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<IError>({
    new_password: "",
    confirm_password: "",
    current_password: "",
  });

  const customStyles = {
    swithcStyle: {
      width: 42,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        mt: "2px",
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: "translateX(18px)",
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: "#7b61ff",
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          color: "#33cf4d",
          border: "6px solid #fff",
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: "#7b61ff",
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.7,
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: 22,
        height: 22,
      },
      "& .MuiSwitch-track": {
        borderRadius: 26 / 2,
        backgroundColor: "#323537",
        opacity: 1,
      },
    },
    profileButtonStyle: {
      color: "white",
      width: "100%",
      justifyContent: "start",
      padding: "20px 16px",
      backgroundColor: "#323537",
      borderRadius: "10px",
      textTransform: "capitalize",
      font: "normal 500 16px/24px 'Exo 2'",
    },
  };

  const handle = {
    newPassChange: (newPass: string) => {
      setNewPassword(newPass);
    },
    currentPassChange: (currPass: string) => {
      setCorrentPassword(currPass);
    },
    confirmPassChange: (currPass: string) => {
      setConfirmPassword(currPass);
    },
    switchChange: () => {
      theme === "dark" ? dispatch(setLightTheme()) : dispatch(setDarkTheme());
    },
    submit: () => {
      const passesValue = "".concat(
        new_password,
        confirm_password,
        current_password
      );

      if (passesValue) {
        if (isFormValid()) {
          setIsLoading(true);
          setPassword({ current_password, new_password })
            .then(() => {
              setNewPassword("");
              setConfirmPassword("");
              setCorrentPassword("");
              setIsSuccessPassChange(true);
            })
            .catch((error) => {
              console.log(error);

              setErrors((prev) => ({ ...prev, ...error.response.data }));
              setIsSuccessPassChange(false);
            })
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    },
  };

  const isFormValid = (): boolean => {
    const newErrors: IError = {
      new_password: "",
      confirm_password: "",
      current_password: "",
    };

    if (!new_password) newErrors.new_password = "Name is required";

    if (!current_password) {
      newErrors.current_password = "Password is required";
    } else if (current_password.length < 8) {
      newErrors.current_password =
        "Password must have at least 8 characters long";
    }

    if (!confirm_password) {
      newErrors.confirm_password = "Password is required";
    } else if (confirm_password.length < 8) {
      newErrors.confirm_password =
        "Password must have at least 8 characters long";
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

  useEffect(() => {
    theme === "dark"
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  }, [theme]);

  return (
    <section className="settings-page">
      <form className="settings-page__form">
        <article className="settings-page__profile-wrapp">
          <h2 className="settings-page__profile-title">Profile</h2>
          <article className="settings-page__profile">
            <div className="settings-page__name-wrapp">
              <h3 className="settings-page__name-lable">Name</h3>
              <Button
                sx={customStyles.profileButtonStyle}
                onClick={() =>
                  navigator.clipboard.writeText(user ? user.username : "")
                }
              >
                {user?.username}
              </Button>
            </div>
            <div className="settings-page__email-wrapp">
              <h3 className="settings-page__email-lable">Email</h3>
              <Button
                sx={customStyles.profileButtonStyle}
                onClick={() =>
                  navigator.clipboard.writeText(user ? user.email : "")
                }
              >
                {user?.email.replace(
                  user?.email.split("@")[0],
                  "*".repeat(user?.email.split("@")[0].length)
                )}
              </Button>
            </div>
          </article>
        </article>
        <article className="settings-page__password-change-wrapp">
          <h2 className="settings-page__password-change-title">Password</h2>
          {isLoading ? (
            <article className="pass__loading">
              <CircularProgress color="inherit" />
            </article>
          ) : (
            <article className="settings-page__password-change">
              <div className="settings-page__password-change-curr-pass">
                <h3 className="settings-page__password-change-curr-pass-title">
                  Password
                </h3>
                <Input
                  title="Your password"
                  type="password"
                  value={current_password}
                  handleChange={(e) => {
                    handle.currentPassChange(e.target.value);
                    errors.current_password = "";
                  }}
                  errorMessage={errors.current_password}
                />
              </div>
              <div className="settings-page__password-enter-new-pass-wrapp">
                <div className="settings-page__password-enter-new-pass">
                  <h3 className="settings-page__password-enter-new-pass-title">
                    New password
                  </h3>
                  <Input
                    title="New password"
                    type="password"
                    value={new_password}
                    handleChange={(e) => {
                      handle.newPassChange(e.target.value);
                      errors.new_password = "";
                    }}
                    errorMessage={errors.new_password}
                  />
                </div>
                <div className="settings-page__password-enter-confirm-pass">
                  <h3 className="settings-page__password-enter-confirm-pass-title">
                    Confirm password
                  </h3>
                  <Input
                    title="Confirm password"
                    type="password"
                    value={confirm_password}
                    handleChange={(e) => {
                      handle.confirmPassChange(e.target.value);
                      errors.confirm_password = "";
                    }}
                    errorMessage={errors.confirm_password}
                  />
                </div>
              </div>
            </article>
          )}
          {isSuccessPassChange && !isLoading && (
            <Alert
              severity="success"
              sx={{
                backgroundColor: "#242426",
                color: "#00a340",
                mt: "10px",
              }}
            >
              Your password has been successfully changed!
            </Alert>
          )}
        </article>
        <article className="settings-page__color-mod-change-wrapp">
          <h3 className="settings-page__color-mod-title">Color mode</h3>
          <label form="" className="settings-page__color-mod-change">
            <div className="settings-page__color-mod-text">
              {theme === "dark" ? (
                <>
                  <h3>Dark</h3>
                  <span>Use dark thema</span>
                </>
              ) : (
                <>
                  <h3>Light</h3>
                  <span>Use light thema</span>
                </>
              )}
            </div>
            <Switch
              sx={customStyles.swithcStyle}
              defaultChecked={theme === "dark"}
              onClick={handle.switchChange}
            />
          </label>
        </article>
        <article className="settings-page__buttons-wrapp">
          <Button
            sx={{
              ...customStyles.profileButtonStyle,
              justifyContent: "center",
            }}
            type="reset"
          >
            Cancel
          </Button>
          <Button
            sx={{
              ...customStyles.profileButtonStyle,
              justifyContent: "center",
              backgroundColor: "#7b61ff",
            }}
            onClick={(e) => {
              e.preventDefault();
              handle.submit();
            }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress color="info" /> : "Save"}
          </Button>
        </article>
      </form>
    </section>
  );
};
