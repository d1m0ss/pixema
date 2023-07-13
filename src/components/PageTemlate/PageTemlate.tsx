import { Outlet } from "react-router-dom";
import { FC, ReactNode } from "react";

import { useAppSelector } from "../../store/hooks";

import { Container } from "./Container/Container";
import { Header } from "./Header/Header";
import { Filter } from "./Filter/Filter";
import { Aside } from "./Aside/Aside";

import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  const { modalState } = useAppSelector((state) => state.usefuls);
  const { theme } = useAppSelector((state) => state.theme);

  return (
    <section className={`page-template ${theme}`}>
      <Aside />
      <article className="page-template__content">
        <Header />
        <Container>
          {children}
          <Outlet />
        </Container>
        {modalState && <Filter />}
      </article>
    </section>
  );
};
