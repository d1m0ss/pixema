import * as React from "react";

import { setModalState } from "../../store/useful/actions";
import { useAppDispatch } from "../../store/hooks";

import { InputAdornment } from "@mui/material";
import { Sort } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";

interface ISearchField {
  value?: string;
  onChangeValue?: (value: string) => void;
  onInputClick?: (value: any) => void;
}

export const SearchField: React.FC<ISearchField> = ({
  value,
  onChangeValue = () => {},
  onInputClick = () => {},
}) => {
  const dispatch = useAppDispatch();

  const handle = {
    modalChange: () => {
      dispatch(setModalState());
    },
  };

  return (
    <Box sx={{ "& > :not(style)": { m: 1, width: "100%" } }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={value}
        onChange={(e) => {
          onChangeValue(e.target.value);
        }}
        onClick={(e: any) => onInputClick(e.target.value)}
        sx={{
          background: "#323537",
          borderRadius: 2,
          label: { color: "white" },
          input: { color: "white" },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handle.modalChange}>
                <Sort style={{ rotate: "180deg", transform: "scale(1, -1)" }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
