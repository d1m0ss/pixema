import { FC } from "react";

import { CircularProgress } from "@mui/material";

export const Loader: FC = () => {
  return (
    <section className="loading">
      <CircularProgress color="info" />
    </section>
  );
};
