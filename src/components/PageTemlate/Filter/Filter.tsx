import { FC, useState } from "react";
import "./Filter.scss";
import { Buttons } from "../../Buttons/Buttons";
import { useAppDispatch } from "../../../store/hooks";
import { setModalState } from "../../../store/useful/actions";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";
import Button from "@mui/material/Button/Button";
import { Input } from "../../Input/Input";
import { Selects } from "../../Selects/Selects";
import { ColorTabs } from "../../Tabs/Tabs";
import CountrySelect from "../../Selects/CountrySelect";

interface IFilter {}

export const Filter: FC<IFilter> = () => {
  const dispatch = useAppDispatch();
  const handleModalChange = () => {
    dispatch(setModalState());
  };
  return (
    <>
      <section className="filter">
        <article
          className="filter__close-field"
          onClick={handleModalChange}
        ></article>
        <article className="filter__settings">
          <article className="filter__sort-year-rate">
            Sort by
            {/* <ButtonGroup>
              <Button>Rating</Button>
              <Button>Year</Button>
            </ButtonGroup> */}
            <ColorTabs />
          </article>
          <article className="filter__sort-year-rate">
            Full or short movie name
            <Input title="Movie name" />
          </article>
          <article className="filter__sort-year-rate">
            Genre
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
            Country
            <CountrySelect />
          </article>
        </article>
      </section>
    </>
  );
};
