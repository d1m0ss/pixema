import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { TitleMovies } from "../components/TitleMovies/TitleMovies";
import { MoviePage } from "../pages/MoviePage/MoviePage";

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<TitleMovies />} />
      <Route path="/:movieId" element={<MoviePage />} />
    {/* <Route path="/posts/search" element={<SearchPage />} /> */}
    {/* <Route path="/posts/sign-in" element={<SignInPost />} /> */}
    {/* <Route path="/posts/sign-up" element={<SignUpPage />} /> */}
    {/* <Route path="/posts/registration-confirm" element={<RegistrationConfirmPage />} /> */}
    {/* <Route path="/posts/success" element={<SuccessPage />} /> */}
    <Route path="*" element={<h1>Такой страницы не существует</h1>} />
  </Routes>
);
