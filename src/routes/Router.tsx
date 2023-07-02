import { FC } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SearchPage } from "../pages/SearchPage/SearcPage";
import { TrendsPage } from "../pages/TrendsPage/TrendsPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";
import { PageTemlate } from "../components/PageTemlate/PageTemlate";
import { AuthsTemplate } from "../components/AuthsTemplate/AuthsTemplate";
import { SIgnInPage } from "../pages/SIgnInPage/SIgnInPage";
import { SIgnUpPage } from "../pages/SIgnUpPage/SIgnUpPage";

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/pixema" />} />

    <Route path="pixema" element={<PageTemlate />}>
      <Route path="" element={<h2>Welcome to Pixema</h2>} />

      <Route path="home" element={<Outlet />}>
        <Route path="" element={<HomePage />} />
        <Route path=":movieId" element={<MoviePage />} />
      </Route>

      <Route path="search" element={<Outlet />}>
        <Route path="" element={<SearchPage />} />
        <Route path=":movieId" element={<MoviePage />} />
      </Route>

      <Route path="trends" element={<Outlet />}>
        <Route path="" element={<TrendsPage />} />
        <Route path=":movieId" element={<MoviePage />} />
      </Route>

      <Route path="favorites" element={<Outlet />}>
        <Route path="" element={<FavoritesPage />} />
        <Route path=":movieId" element={<MoviePage />} />
      </Route>
    </Route>

    <Route path="authentication" element={<AuthsTemplate />}>
      <Route path="sign-in" element={<SIgnInPage />} />
    </Route>

    <Route path="authorisation" element={<AuthsTemplate />}>
      <Route path="sign-in" element={<SIgnInPage />} />
      <Route path="sign-up" element={<SIgnUpPage />} />
    </Route>

    <Route
      path="*"
      element={
        <PageTemlate>
          <h2>Такой страницы не существует.</h2>
        </PageTemlate>
      }
    />
  </Routes>
);
