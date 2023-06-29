import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage/MoviePage";
import { HomePage } from "../pages/HomePage/HomePage";
import { SearchPage } from "../pages/SearchPage/SearcPage";
import { TrendsPage } from "../pages/TrendsPage/TrendsPage";
import { FavoritesPage } from "../pages/FavoritesPage/FavoritesPage";

export const Router: FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/search" element={<SearchPage />} />
    <Route path="/trends" element={<TrendsPage />} />
    <Route path="/favorites" element={<FavoritesPage />} />
    <Route path="/:movieId" element={<MoviePage />} />
    <Route path="*" element={<h1>Такой страницы не существует</h1>} />
  </Routes>
);
