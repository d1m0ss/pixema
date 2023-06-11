import { FC, ReactNode } from "react";
import { Header } from "./Header/Header";
import { Container } from "./Container/Container";
import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  return (
    <section className={`page-template`}>
      <Container>{children}</Container>
    </section>
  );
};
