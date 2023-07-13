import { FC } from "react";

import { Autocomplete } from "@mui/material";
import { TextField } from "@mui/material";

interface ISelects {
  title?: string;
  placeholder?: string;
  isMulti?: boolean;
  onSelect?: (select: string) => void;
}

export const Selects: FC<ISelects> = ({
  isMulti = false,
  title = "Input",
  placeholder = "Placeholder",
  onSelect = () => {},
}) =>
  isMulti ? (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      onChange={(event: any) => {
        const selectText = event.target.innerText;
        onSelect(selectText);
      }}
      options={top100Films}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <>
          <li {...props}>{option.title}</li>
        </>
      )}
      sx={{
        "& > :not(style)": { width: "100%" },
        background: "#323537",
        borderRadius: 2,
        label: { color: "white" },
        input: { color: "white" },
      }}
      renderInput={(params) => (
        <TextField {...params} label={title} placeholder={placeholder} />
      )}
    />
  ) : (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      onChange={(s: any) => {
        console.log(s.target.innerText);
      }}
      style={{ width: "100%" }}
      options={top100Films.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={title}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );

const top100Films = [
  { title: "Action" },
  { title: "Adventure" },
  { title: "Animation" },
  { title: "Biography" },
  { title: "Comedy" },
  { title: "Crime" },
  { title: "Documentary" },
  { title: "Drama" },
  { title: "Family" },
  { title: "Fantasy" },
  { title: "Film-Noir" },
  { title: "History" },
  { title: "Horror" },
  { title: "Music" },
  { title: "Musical" },
  { title: "Mystery" },
  { title: "Romance" },
  { title: "Sci-Fi" },
  { title: "Short" },
  { title: "Sport" },
  { title: "Thriller" },
  { title: "War" },
  { title: "Western" },
];
