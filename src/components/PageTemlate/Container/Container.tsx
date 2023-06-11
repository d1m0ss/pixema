import { FC, ReactNode } from "react";
import "./Container.scss";
import Link from "@mui/material/Link/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import { Header } from "../Header/Header";
import { PixemaLogo } from "../../../assets/icon/icons";

interface IContainer {
  children?: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => {
  const linksStyle = {
    // color: "#80858B",
    justifyContent: "start",
    background: "transparent",
    "&:hover": { color: "#7B61FF" },
  };
  return (
    <section className="container">
      <aside className="container__aside">
        <article className="container__logo-wrapper">
          <PixemaLogo />
        </article>
        <article className="container__buttons-group">
          <Button
            variant="contained"
            startIcon={<HomeIcon />}
            style={linksStyle}
            sx={{ ...linksStyle, color: "#80858B" }}
          >
            Home
          </Button>
          <Button
            variant="contained"
            startIcon={<WhatshotIcon />}
            style={linksStyle}
            sx={{ ...linksStyle, color: "#80858B" }}
          >
            Trends
          </Button>
          <Button
            variant="contained"
            startIcon={<BookmarkIcon />}
            style={linksStyle}
            sx={{ ...linksStyle, color: "#80858B" }}
          >
            Favorites
          </Button>
          <Button
            variant="contained"
            startIcon={<SettingsIcon />}
            style={linksStyle}
            sx={{ ...linksStyle, color: "#80858B" }}
          >
            Settings
          </Button>
        </article>
        <article className="container__copywrite">
          <span>© All Rights Reserved</span>
        </article>
      </aside>
      <article className="container__content">
        {" "}
        <Header />
        {children}
      </article>
    </section>
  );
};
