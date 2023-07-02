import { FC, ReactNode } from "react";
import { PixemaLogo } from "../../assets/icon/icons";
import "./AuthsTemplate.scss";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { IconButton } from "@mui/material";

interface IAuthsTemplate {
  children?: ReactNode;
}

export const AuthsTemplate: FC<IAuthsTemplate> = ({ children }) => {
  const { titleMovies, trendMovies } = useAppSelector((state) => state.movies);
  const navigate = useNavigate()
  return (
    <section className="auths-template">
      <article className="auths-template__back">
        {titleMovies &&
          titleMovies.map(({ Poster }) => (
            <img
              src={Poster}
              className="auths-template__back-img"
              alt="back-img"
            />
          ))}
        {trendMovies &&
          trendMovies.map(({ Poster }) => (
            <img
              src={Poster}
              className="auths-template__back-img"
              alt="back-img"
            />
          ))}
        {titleMovies &&
          titleMovies.map(({ Poster }) => (
            <img
              src={Poster}
              className="auths-template__back-img"
              alt="back-img"
            />
          ))}
        {trendMovies &&
          trendMovies.map(({ Poster }) => (
            <img
              src={Poster}
              className="auths-template__back-img"
              alt="back-img"
            />
          ))}
        {titleMovies &&
          titleMovies.map(({ Poster }) => (
            <img
              src={Poster}
              className="auths-template__back-img"
              alt="back-img"
            />
          ))}
      </article>
      <header className="auths-template__header">
        <IconButton onClick={()=>navigate('/pixema')}>
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
