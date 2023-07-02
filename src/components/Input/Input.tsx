import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IInput {
  title: string;
  type?: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<IInput> = ({ title, type = "text" }) => {
  return (
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
        id="outlined-basic"
        label={title}
        variant="outlined"
        type={type}
      />
    </Box>
  );
};
