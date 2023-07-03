import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Card.scss";
import { Score } from "../Score/Score";

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
}) => {
  return (
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
        <div className="card_score-wrapper">
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
};
