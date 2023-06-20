import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SortIcon from "@mui/icons-material/Sort";
import { useAppDispatch } from "../../store/hooks";
import { fetchMovie } from "../../store/movies/actions";

export default function InputWithIcon() {
  const dispatch = useAppDispatch();
  let timeout: any = null;
  const onChangeLog = (e: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(e);
      dispatch(fetchMovie(`&s=${e}&t=movie`));
    }, 800);
  };
  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "100%" } }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          onChangeLog(e.target.value);
        }}
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
