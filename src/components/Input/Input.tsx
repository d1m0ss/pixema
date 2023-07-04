import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IInput {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  errorMessage?: string;
  handleChange?: (e: any) => void;
}

export const Input: React.FC<IInput> = ({
  title,
  type = "text",
  value,
  errorMessage,
  handleChange = () => {},
}) => {
  return (
    <>
      <Box
        component="div"
        sx={{
          "& > :not(style)": { width: "100%" },
          marginTop: "8px",
          background: "#323537",
          borderRadius: 2,
          outlineColor: "red",
          label: { color: "#7b61ff" },
          input: { color: "white" },
          "& label.Mui-focused ": {
            color: "#7b61ff",
          },
          " & .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": { borderColor: "#7b61ff" },
          },
        }}
      >
        <TextField
          error={!!errorMessage}
          onChange={handleChange}
          id="outlined-basic"
          label={title}
          variant="outlined"
          type={type}
          value={value && value}
          color="primary"
        />
      </Box>
      {errorMessage && (
        <span
          style={{
            color: "#D32F31",
            font: `normal 400 16px/24px "Exo 2"`,
            marginLeft: "10px",
          }}
        >
          {errorMessage}
        </span>
      )}
    </>
  );
};
