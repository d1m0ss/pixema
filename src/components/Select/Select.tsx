import { FC,  useEffect, useState } from "react";
import { SelectArrow } from "../../assets/icon/icons";
import { Option } from "./Option/Option";
import { Input } from "../Input/Input";
import "./Select.scss";
// import { Choosen } from "./Choosen/Choosen";

interface ISelect {
  placeholder?: string;
  children: string | string[];
  isMulty?: boolean;
}

export const Select: FC<ISelect> = ({
  placeholder = "",
  children,
  isMulty = false,
}) => {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [placeholderState, setPlaceholderState] = useState(placeholder);

  const handleOpen = () => {
    setIsOpenSelect((prev) => !prev);
  };
  const handleClickOne = (text: string) => {
    setPlaceholderState(text);
    setIsOpenSelect((prev) => !prev);
  };
  const handleClickMulti = (text: string) => {
    setPlaceholderState((prev) => `${prev} ${text}`);
  };
  const handleSearch = (text: string) => {
    console.log(`multi ${text}`);
  };

  useEffect(() => {
    const filtered = placeholderState.split(" ").filter((item) => item !== "");
    filtered.length !== 0 && console.log(filtered);
    console.log(isMulty);
  }, [placeholderState]);

  return (
    <article className="select">
      <Input
        title="Title"
        value={placeholderState}
        nameClass="select__top"
        placeholder="Placeholder"
        handleChange={handleSearch}
        handleClick={handleOpen}
      />
      <SelectArrow onClick={() => setIsOpenSelect((prev) => !prev)} />

      {isOpenSelect && (
        <article
          className="select__choises"
          // onClick={(e: any) => console.dir(e.target.childNodes)}
        >
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
