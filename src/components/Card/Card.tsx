import { FC } from "react";

import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import { CardMedia } from "@mui/material";
import { Score } from "../Score/Score";
import { Card } from "@mui/material";

import "./Card.scss";

interface IActionAreaCard {
  title?: string;
  image?: string;
  genre?: string;
  score?: string;
  isClickable?: boolean;
  onHandleClick?: () => void;
  typographyClick?: () => void;
}

export const ActionAreaCard: FC<IActionAreaCard> = ({
  title,
  image,
  genre,
  score,
  isClickable = false,
  onHandleClick,
  typographyClick,
}) => (
  <Card
    sx={{
      width: "266px",
      backgroundColor: "transparent",
      position: "relative",
      color: "white",
    }}
    onClick={onHandleClick}
    className={isClickable ? "Clickable" : ""}
  >
    <CardMedia
      component="img"
      height="357px"
      sx={{ borderRadius: "20px" }}
      image={image}
      alt="poster"
    />
    {score && (
      <div className="card__score-wrapper">
        <Score>{score}</Score>
      </div>
    )}
    <CardContent>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        onClick={typographyClick}
        sx={{ cursor: "pointer", "&:hover": { color: "#917cff" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        style={{ color: "#AFB2B6" }}
      >
        {genre}
      </Typography>
    </CardContent>
  </Card>
);
