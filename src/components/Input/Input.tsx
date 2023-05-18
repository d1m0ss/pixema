import { FC } from "react";
import "./Input.scss";

interface IInput {
  value: string;
  title: string;
  placeholder?: string;
  isDisabled?: boolean;
  errorMessage?: string;
  handleChange: (newValue: string) => void;
}

export const Input: FC<IInput> = ({
  title,
  value,
  placeholder,
  errorMessage,
  isDisabled = false,
  handleChange,
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
        className={`input ${errorMessage && "error"}`}
        onChange={(e) => handleChange(e.target.value)}
      />
      {errorMessage && <div className="error-mesage">{errorMessage}</div>}
    </div>
  );
};
