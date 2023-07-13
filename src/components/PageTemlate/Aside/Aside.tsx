import { useLocation, useNavigate } from "react-router-dom";
import { FC } from "react";

import { useAppSelector } from "../../../store/hooks";

import { PixemaLogo } from "../../../assets/icon/pixemaLogo";
import { Button, IconButton } from "@mui/material";
import { Whatshot } from "@mui/icons-material";
import { Bookmark } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { Home } from "@mui/icons-material";

export const Aside: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { authStatus } = useAppSelector((state) => state.auth);

  const linksStyle = {
    justifyContent: "start",
    background: "transparent",
    "&:hover": { color: "#7B61FF", backgroundColor: "transparent" },
  };

  return (
    <aside className="container__aside">
      <article className="container__logo-wrapper">
        <IconButton onClick={() => navigate("/pixema")}>
          <PixemaLogo />
        </IconButton>
      </article>
      <article className="container__buttons-group">
        <Button
          variant="contained"
          startIcon={<Home />}
          sx={{ ...linksStyle, color: "#80858B" }}
          onClick={() => {
            location.pathname.includes("pixema")
              ? navigate("home")
              : navigate("/pixema/home");
          }}
        >
          Home
        </Button>
        <Button
          variant="contained"
          startIcon={<Whatshot />}
          sx={{
            ...linksStyle,
            color: "#80858B",
            "&:hove": { backgroundColor: "transparent" },
          }}
          onClick={() => {
            location.pathname.includes("pixema")
              ? navigate("trends")
              : navigate("/pixema/trends");
          }}
        >
          Trends
        </Button>
        {authStatus && (
          <>
            <Button
              variant="contained"
              startIcon={<Bookmark />}
              sx={{ ...linksStyle, color: "#80858B" }}
              onClick={() => {
                location.pathname.includes("pixema")
                  ? navigate("favorites")
                  : navigate("/pixema/favorites");
              }}
            >
              Favorites
            </Button>
            <Button
              variant="contained"
              startIcon={<Settings />}
              sx={{ ...linksStyle, color: "#80858B" }}
              onClick={() => {
                location.pathname.includes("pixema")
                  ? navigate("settings")
                  : navigate("/pixema/home");
              }}
            >
              Settings
            </Button>
          </>
        )}
      </article>
      <article className="container__copywrite">
        <span>© All Rights Reserved</span>
      </article>
    </aside>
  );
};
