import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IInput {
  title: string;
  type?: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  handleChange?: (e: any) => void;
}

export const Input: React.FC<IInput> = ({
  title,
  type = "text",
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
          label: { color: "white" },
          input: { color: "white" },
        }}
      >
        <TextField
          error={!!errorMessage}
          onChange={handleChange}
          id="outlined-basic"
          label={title}
          variant="outlined"
          type={type}
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
