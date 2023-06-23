import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SortIcon from "@mui/icons-material/Sort";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMovie } from "../../store/movies/actions";
import { setModalState, setSearchValue } from "../../store/useful/actions";
import IconButton from "@mui/material/IconButton";

interface ISearchField {
  onChangeValue?: (value: string) => void;
}

export const SearchField: React.FC<ISearchField> = ({
  onChangeValue = () => {},
}) => {
  const dispatch = useAppDispatch();
  const handleNodalChange = () => {
    dispatch(setModalState());
  };
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
              <IconButton onClick={handleNodalChange}>
                <SortIcon
                  style={{ rotate: "180deg", transform: "scale(1, -1)" }}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
