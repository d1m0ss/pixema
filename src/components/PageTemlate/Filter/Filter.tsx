import { FC } from "react";

import { useAppDispatch } from "../../../store/hooks";
import { setModalState } from "../../../store/useful/actions";

import { CountrySelect } from "../../Selects/CountrySelect";
import { Selects } from "../../Selects/Selects";
import { Input } from "../../Input/Input";
import { Button } from "@mui/material";

import "./Filter.scss";

interface IFilter {}

export const Filter: FC<IFilter> = () => {
  const dispatch = useAppDispatch();

  const handle = {
    modalChange: () => {
      dispatch(setModalState());
    },
  };

  const buttonsGroupStyle = {
    "&:hover": {
      backgroundColor: "transparent",
    },
    background: "#323537",
    borderRadius: "0",
    width: "50%",
    height: "100%",
    color: "#AFB2B6",
    border: "0",
  };

  return (
    <>
      <section className="filter">
        <article
          className="filter__close-field"
          onClick={handle.modalChange}
        ></article>
        <article className="filter__wrapper">
          <article className="filter__settings">
            <article className="filter__sort-year-rate">
              Sort by
              <article className="filter__buttons-wrapper">
                <Button sx={buttonsGroupStyle}>Rating</Button>
                <Button sx={buttonsGroupStyle}>Year</Button>
              </article>
            </article>
            <article className="filter__inputs">
              <article className="filter__sort-year-rate">
                Full or short movie name
                <Input title="Movie name" />
              </article>
              <article className="filter__sort-year-rate">
                <Selects isMulti title="Genre" />
              </article>
              <article className="filter__sort-year-rate">
                Years
                <div className="filter__inputs-row">
                  <Input title="from" />
                  <Input title="to" />
                </div>
              </article>
              <article className="filter__sort-year-rate">
                Ratig
                <div className="filter__inputs-row">
                  <Input title="from" />
                  <Input title="to" />
                </div>
              </article>
              <article className="filter__sort-year-rate">
                <CountrySelect />
              </article>
            </article>
            <article className="filter__complete-buttons">
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  background: "#323537",
                  borderRadius: "20px",
                  width: "50%",
                  height: "56px",
                  color: "white",
                  border: "0",
                }}
              >
                Clear filter
              </Button>
              <Button
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                  background: "#7B61FF",
                  borderRadius: "20px",
                  width: "50%",
                  height: "56px",
                  color: "white",
                  border: "0",
                }}
              >
                Show results
              </Button>
            </article>
          </article>
        </article>
      </section>
    </>
  );
};
