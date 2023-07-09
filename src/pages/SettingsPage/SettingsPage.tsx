import { FC } from "react";
import "./SettingsPage.scss";

interface ISettingsPage {}

export const SettingsPage: FC<ISettingsPage> = () => {
  return (
    <section className="settings-page">
      <article className="settings-page__profile"></article>
      <article className="settings-page__name-change"></article>
      <article className="settings-page__password-change"></article>
    </section>
  );
};
