import { FC } from "react";

import { setModalShareState } from "../../store/useful/actions";
import { useAppDispatch } from "../../store/hooks";

import { Button } from "@mui/material";

import "./ModalShare.scss";
import { Socials } from "./Socials/Socials";

interface IModalShare {}

export const ModalShare: FC<IModalShare> = () => {
  const dispatch = useAppDispatch();
  return (
    <section className="share">
      <article
        className="share__close"
        onClick={() => dispatch(setModalShareState())}
      ></article>
      <article className="share__modal">
        <Button
          sx={{
            color: "white",
            margin: "0",
            padding: "0",
            textTransform: "capitalize",
          }}
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          <div className="share__path">
            <h2>{window.location.href}</h2>
          </div>
        </Button>
        <Socials/>
      </article>
    </section>
  );
};
