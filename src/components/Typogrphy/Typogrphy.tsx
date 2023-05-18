import { FC } from "react";
import "./Typogrphy.scss";

interface Typogrphy {
  content: string;
  type: "H1" | "H2" | "H3" | "subline" | "primary" | "secondary";
  isLink?: boolean;
  linkPath?: string;
}

export const Typogrphy: FC<Typogrphy> = ({ type, content, isLink = false, linkPath = "" }) => {
  const titlesMap = {
    H1: <h1 className={`typogrphy__${type}`}>{content}</h1>,
    H2: <h2 className={`typogrphy__${type}`}>{content}</h2>,
    H3: <h3 className={`typogrphy__${type}`}>{content}</h3>,
    subline: <h4 className={`typogrphy__${type}`}>{content}</h4>,
    primary: <p className={`typogrphy__${type}`}>{content}</p>,
    secondary: <p className={`typogrphy__${type}`}>{content}</p>,
  };

  return (
    <>
      {isLink ? (
        <a className="link" href={linkPath}>
          {titlesMap[type]}
        </a>
      ) : (
        <>{titlesMap[type]}</>
      )}
    </>
  );
};
