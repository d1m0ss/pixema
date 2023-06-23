import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IInput {
  title: string;
}

export const Input: React.FC<IInput> = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        "& > :not(style)": { width: "100%" },
        background: "#323537",
        borderRadius: 2,
        label: { color: "white" },
        input: { color: "white" },
      }}
    >
      <TextField id="outlined-basic" label={title} variant="outlined" />
    </Box>
  );
};
