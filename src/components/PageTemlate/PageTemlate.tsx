import { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import { Container } from "./Container/Container";
import "./PageTemlate.scss";
import { Aside } from "./Aside/Aside";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  return (
    <section className="page-template">
      <Aside />
      <article className="page-template__content">
        <Header />
        <Container>{children}</Container>
      </article>
    </section>
  );
};
