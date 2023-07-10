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
import { ConfirmPage } from "../pages/ConfirmPage/ConfirmPage";
import { useAppSelector } from "../store/hooks";
import { ProtectedRoute } from "./ProtectedRoute";
import { ActivatePage } from "../pages/ActivatePage/ActivatePage";
import { ResetPassPage } from "../pages/ResetPassPage/ResetPassPage";
import { ResetPassPageConfirm } from "../pages/ResetPassPageConfirm/ResetPassPageConfirm";
import { SettingsPage } from "../pages/SettingsPage/SettingsPage";

export const Router: FC = () => {
  const { email } = useAppSelector((state) => state.user);
  const { authStatus } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pixema" />} />
      <Route
        path="/"
        element={
          <PageTemlate>
            <Outlet />
          </PageTemlate>
        }
      >
        <Route path=":movieId" element={<MoviePage />} />
      </Route>

      <Route path="pixema" element={<PageTemlate />}>
        <Route path="" element={<h2>Welcome to Pixema</h2>} />

        <Route path="home" element={<Outlet />}>
          <Route path="" element={<HomePage />} />
          <Route path=":movieId" element={<MoviePage />} />
        </Route>

        <Route path="trends" element={<Outlet />}>
          <Route path="" element={<TrendsPage />} />
          <Route path=":movieId" element={<MoviePage />} />
        </Route>

        <Route path="search" element={<Outlet />}>
          <Route path="" element={<SearchPage />} />
          <Route path=":movieId" element={<MoviePage />} />
        </Route>
        
        <Route
          element={<ProtectedRoute access={authStatus} to="/pixema/home" />}
        >
          <Route path="favorites" element={<Outlet />}>
            <Route path="" element={<FavoritesPage />} />
            <Route path=":movieId" element={<MoviePage />} />
          </Route>
        </Route>

        <Route
          element={<ProtectedRoute access={authStatus} to="/pixema/home" />}
        >
          <Route path="settings" element={<Outlet />}>
            <Route path="" element={<SettingsPage />} />
          </Route>
        </Route>
      </Route>
      <Route
        element={<ProtectedRoute access={!authStatus} to="/pixema/home" />}
      >
        <Route path="authorisation" element={<AuthsTemplate />}>
          <Route path="sign-up" element={<SIgnUpPage />} />
          <Route path="activate/:uid/:token" element={<ActivatePage />} />
          <Route
            element={<ProtectedRoute access={!!email} to="/pixema/home" />}
          >
            <Route path="confirm" element={<ConfirmPage />} />
          </Route>
        </Route>

        <Route path="authentication" element={<AuthsTemplate />}>
          <Route path="activate/:uid/:token" element={<ActivatePage />} />
          <Route path="sign-in" element={<SIgnInPage />} />
          <Route path="reset-password" element={<ResetPassPage />} />
          <Route
            path="password/reset/confirm/:uid/:token"
            element={<ResetPassPageConfirm />}
          />
        </Route>
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
};
