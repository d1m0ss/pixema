import { FC } from "react";
import "./SettingsPage.scss";
import { Button } from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { Input } from "../../components/Input/Input";
import Switch from "@mui/material/Switch";

interface ISettingsPage {}

export const SettingsPage: FC<ISettingsPage> = () => {
  const { user } = useAppSelector((state) => state.user);

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
        backgroundColor: "#E9E9EA",
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

  return (
    <section className="settings-page">
      <form className="settings-page__form">
        <article className="settings-page__profile-wrapp">
          <h2 className="settings-page__profile-title">Profile</h2>
          <article className="settings-page__profile">
            <div className="settings-page__name-wrapp">
              <h3 className="settings-page__name-lable">Name</h3>
              <Button sx={customStyles.profileButtonStyle}>
                {user?.username}
              </Button>
            </div>
            <div className="settings-page__email-wrapp">
              <h3 className="settings-page__email-lable">Email</h3>
              <Button sx={customStyles.profileButtonStyle}>
                {user?.email}
              </Button>
            </div>
          </article>
        </article>
        <article className="settings-page__password-change-wrapp">
          <h2 className="settings-page__password-change-title">Password</h2>
          <article className="settings-page__password-change">
            <div className="settings-page__password-change-curr-pass">
              <h3 className="settings-page__password-change-curr-pass-title">
                Password
              </h3>
              <Input title="Your password" />
            </div>
            <div className="settings-page__password-enter-new-pass-wrapp">
              <div className="settings-page__password-enter-new-pass">
                <h3 className="settings-page__password-enter-new-pass-title">
                  New password
                </h3>
                <Input title="New password" />
              </div>
              <div className="settings-page__password-enter-confirm-pass">
                <h3 className="settings-page__password-enter-confirm-pass-title">
                  Confirm password
                </h3>
                <Input title="Confirm password" />
              </div>
            </div>
          </article>
        </article>
        <article className="settings-page__color-mod-change-wrapp">
          <h3 className="settings-page__color-mod-title">Color mode</h3>
          <label form="" className="settings-page__color-mod-change">
            <div className="settings-page__color-mod-text">
              <h3>Dark</h3>
              <span>Use dark thema</span>
            </div>
            <Switch sx={customStyles.swithcStyle} />
          </label>
        </article>
        <article className="settings-page__buttons-wrapp">
          <Button
            sx={{
              ...customStyles.profileButtonStyle,
              justifyContent: "center",
            }}
          >
            Cancel
          </Button>
          <Button
            sx={{
              ...customStyles.profileButtonStyle,
              justifyContent: "center",
              backgroundColor: "#7b61ff",
            }}
          >
            Save
          </Button>
        </article>
      </form>
    </section>
  );
};
