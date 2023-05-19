import { FC, ReactNode } from "react";
import { Tab } from "./Tab/Tab";
import "./Tabs.scss";

interface ITabs {
  children: string[];
}

export const Tabs: FC<ITabs> = ({ children }) => {
  return (
    <section className="tabs">
      <ul className="tabs__list" >
        {children.map((tab, i) => (
          <Tab key={i} title={tab} isActive={!!(i - 1)} />
        ))}
      </ul>
    </section>
  );
};
