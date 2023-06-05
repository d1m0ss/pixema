import { FC } from "react";
import "./Input.scss";

interface IInput {
  value?: string;
  title: string;
  placeholder?: string;
  isDisabled?: boolean;
  errorMessage?: string;
  nameClass?: string;
  handleChange?: (newValue: string) => void;
  handleClick?: () => void;
  handleBlur?: () => void;
}

export const Input: FC<IInput> = ({
  title,
  value,
  placeholder,
  errorMessage,
  isDisabled = false,
  nameClass,
  handleChange = () => {},
  handleClick,
  handleBlur,
}) => {
  return (
    <div className="input__wrapper">
      <label htmlFor={`input-${title}`} className="label">
        {title}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        disabled={isDisabled}
        value={value}
        id={`input-${title}`}
        className={nameClass ? nameClass : `input ${errorMessage && "error"}`}
        onChange={(e) => handleChange(e.target.value)}
        onClick={handleClick}
        onBlur={handleBlur}
      />
      {errorMessage && <div className="error-mesage">{errorMessage}</div>}
    </div>
  );
};
