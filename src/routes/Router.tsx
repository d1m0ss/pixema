import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SearchPage } from "../pages/SearchPage/SearcPage";
import { TrendsPage } from "../pages/TrendsPage/TrendsPage";

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/trends" element={<TrendsPage />} />
    <Route path="/:movieId" element={<MoviePage />} />
    {/* <Route path="/posts/search" element={<SearchPage />} /> */}
    {/* <Route path="/posts/sign-in" element={<SignInPost />} /> */}
    {/* <Route path="/posts/sign-up" element={<SignUpPage />} /> */}
    {/* <Route path="/posts/registration-confirm" element={<RegistrationConfirmPage />} /> */}
    {/* <Route path="/posts/success" element={<SuccessPage />} /> */}
    <Route path="*" element={<h1>Такой страницы не существует</h1>} />
  </Routes>
);
