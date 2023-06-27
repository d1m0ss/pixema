import { FC, ReactNode, useEffect } from "react";
import { Header } from "./Header/Header";
import { Container } from "./Container/Container";
import { Aside } from "./Aside/Aside";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Filter } from "./Filter/Filter";
import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  const { modalState } = useAppSelector((state) => state.usefuls);
  return (
    <section className="page-template">
      <Aside />
      <article className="page-template__content">
        <Header />
        <Container>{children}</Container>
        {modalState && <Filter />}
      </article>
    </section>
  );
};
