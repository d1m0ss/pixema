import { FC } from "react";
import "./Search.scss";

interface ISearch {
  value?: string;
  placeholder?: string;
  isDisabled?: boolean;
  handleChange?: (text: string) => void;
}

export const Search: FC<ISearch> = ({
  value,
  placeholder = "Search",
  isDisabled = false,
  handleChange = () => {},
}) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={`input`} className="label"></label>
      <input
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
        value={value}
        id={`input`}
        className={`input`}
        onChange={(e: any) => handleChange(e.target.value)}
      />
    </div>
  );
};
