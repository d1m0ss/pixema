import { FC, ReactNode, useState } from "react";
import { SelectArrow } from "../../assets/icon/icons";
import { Option } from "./Option/Option";
import "./Select.scss";

interface ISelect {
  placeholder?: string;
  children: string | string[];
  isMulty?: boolean;
}

export const Select: FC<ISelect> = ({
  placeholder = "Placeholder",
  children,
  isMulty = false,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleOpen = () => {
    setIsOpenSelect((prev) => !prev);
  };

  const handleClickOne = (e: string) => {
    console.log(`one ${e}`);
    setIsOpenSelect((prev) => !prev);
  };

  const handleClickMulti = (e: string) => {
    console.log(`multi ${e}`);
  };

  return (
    <article className="select">
      <button className="select__top" type="button" onClick={handleOpen}>
        <span>{placeholder}</span>
        <SelectArrow />
      </button>
      {isOpenSelect && (
        <article className="select__choises">
          {Array.isArray(children) ? (
            children.map((item) => (
              <Option
                onClickSelect={() =>
                  isMulty ? handleClickMulti(item) : handleClickOne(item)
                }
              >
                {item}
              </Option>
            ))
          ) : (
            <Option>{children}</Option>
          )}
        </article>
      )}
    </article>
  );
};
