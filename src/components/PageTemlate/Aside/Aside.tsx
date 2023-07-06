import "./Aside.scss";
import { FC } from "react";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button, IconButton } from "@mui/material";
import { PixemaLogo } from "../../../assets/icon/icons";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setModalState } from "../../../store/useful/actions";
import { useLocation, useNavigate } from "react-router-dom";

interface IAside {}

export const Aside: FC<IAside> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { authStatus } = useAppSelector((state) => state.auth);
  const location = useLocation();
  const handleModalChange = () => {
    dispatch(setModalState());
  };

  const isLogged = authStatus;

  const linksStyle = {
    // color: "#80858B",
    justifyContent: "start",
    background: "transparent",
    "&:hover": { color: "#7B61FF" },
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
          startIcon={<HomeIcon />}
          style={linksStyle}
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
          startIcon={<WhatshotIcon />}
          style={linksStyle}
          sx={{ ...linksStyle, color: "#80858B" }}
          onClick={() => {
            location.pathname.includes("pixema")
              ? navigate("trends")
              : navigate("/pixema/trends");
          }}
        >
          Trends
        </Button>
        {isLogged && (
          <>
            <Button
              variant="contained"
              startIcon={<BookmarkIcon />}
              style={linksStyle}
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
              onClick={handleModalChange}
              variant="contained"
              startIcon={<SettingsIcon />}
              style={linksStyle}
              sx={{ ...linksStyle, color: "#80858B" }}
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
