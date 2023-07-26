import { FC, ReactNode } from "react";

import "./Container.scss";

interface IContainer {
  children?: ReactNode;
}

export const Container: FC<IContainer> = ({ children }) => (
  <section className="container">
    <article className="container__content">{children}</article>
  </section>
);
