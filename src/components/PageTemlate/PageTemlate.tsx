import { FC, ReactNode } from "react";
import { Header } from "../Header/Header";
import { Container } from "../Container/Container";
import { Footer } from "../Footer/Footer";
import { useAppContext } from "../AppContext/AppContext";
import "./PageTemlate.scss";

interface IPageTemlate {
  children?: ReactNode;
}

export const PageTemlate: FC<IPageTemlate> = ({ children }) => {
  const { theme } = useAppContext();

  return (
    <section className={`page-template-${theme}`}>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </section>
  );
};
