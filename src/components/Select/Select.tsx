import { FC, ReactNode, useState } from "react";
import "./Select.scss";
import { SelectArrow } from "../../assets/icon/icons";

interface ISelect {
  placeholder?: string;
  children: ReactNode;
  isMulty?: boolean;
}

export const Select: FC<ISelect> = ({ placeholder = "Placeholder", children }) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const handleOpen = () => {
    setIsOpenSelect((prev) => !prev);
  };

  return (
    <article className="select">
      <button className="select__top" type="button" onClick={handleOpen}>
        <span>{placeholder}</span>
        <SelectArrow />
      </button>
      {isOpenSelect && <article className="select__choises">{children}</article>}
    </article>
  );
};
