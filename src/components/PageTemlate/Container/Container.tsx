import { FC, ReactNode } from "react";
import "./Container.scss";
import { Header } from "../Header/Header";

interface IContainer {
  children?: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
  <section className="container">
    <article className="container__content">{children}</article>
  </section>
);
