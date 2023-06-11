import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Input = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { mt: 3, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Box>
  );
};
