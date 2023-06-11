import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SortIcon from "@mui/icons-material/Sort";

export default function InputWithIcon() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "100%" } }}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        // style={{ background: "#323537" }}
        sx={{
          background: "#323537",
          borderRadius: 2,
          label: { color: "white" },
          input: { color: "white" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SortIcon
                style={{ rotate: "180deg", transform: "scale(1, -1)" }}
              />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
