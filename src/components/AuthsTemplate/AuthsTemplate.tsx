import { FC, ReactNode } from "react";
import "./AuthsTemplate.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { IconButton } from "@mui/material";
import { PixemaLogo } from "../../assets/icon/pixemaLogo";

interface IAuthsTemplate {
  children?: ReactNode;
}

export const AuthsTemplate: FC<IAuthsTemplate> = ({ children }) => {
  const { titleMovies, trendMovies } = useAppSelector((state) => state.movies);
  const { theme } = useAppSelector((state) => state.theme);
  const navigate = useNavigate();
  return (
    <section className={`auths-template ${theme}`}>
      <article className="auths-template__back">
        {titleMovies &&
          trendMovies &&
          [...titleMovies, ...trendMovies, ...titleMovies, ...trendMovies].map(
            ({ Poster }) => (
              <img
                src={Poster}
                className="auths-template__back-img"
                alt="back-img"
              />
            )
          )}
      </article>
      <header className="auths-template__header">
        <IconButton onClick={() => navigate("/pixema")}>
          <PixemaLogo />
        </IconButton>
      </header>
      <section className="auths-template__body">
        {children}
        <Outlet />
      </section>
      <footer className="auths-template__footer">© All Rights Reserved</footer>
    </section>
  );
};
