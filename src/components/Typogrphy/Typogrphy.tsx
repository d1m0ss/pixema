import { FC } from "react";
import "./Typogrphy.scss";

interface Typogrphy {
  children: string;
  type: "H1" | "H2" | "H3" | "S1-1" | "S1-2" | "S1-3" | "S1-4" | "body";
  isLink?: boolean;
  linkPath?: string;
}

export const Typogrphy: FC<Typogrphy> = ({ type, children, isLink = false, linkPath = "" }) => {
  const titlesMap = {
    H1: <h1 className={`typogrphy__${type}`}>{children}</h1>,
    H2: <h2 className={`typogrphy__${type}`}>{children}</h2>,
    H3: <h3 className={`typogrphy__${type}`}>{children}</h3>,
    "S1-1": <h4 className={`typogrphy__${type}`}>{children}</h4>,
    "S1-2": <p className={`typogrphy__${type}`}>{children}</p>,
    "S1-3": <p className={`typogrphy__${type}`}>{children}</p>,
    "S1-4": <p className={`typogrphy__${type}`}>{children}</p>,
    body: <p className={`typogrphy__${type}`}>{children}</p>,
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
