import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SortIcon from "@mui/icons-material/Sort";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovie } from "../../store/movies/actions";
import { setSearchValue } from "../../store/search/actions";

interface ISearchField {
  onChangeValue?: (value: string) => void;
}

export const SearchField: React.FC<ISearchField> = ({
  onChangeValue = () => {},
}) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "100%" } }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => {
          onChangeValue(e.target.value);
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
};
