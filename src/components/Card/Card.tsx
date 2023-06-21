import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Card.scss";

interface IActionAreaCard {
  title?: string;
  image?: string;
  genre?: string;
  isClickable?: boolean;
  onHandleClick?: () => void;
}

export const ActionAreaCard: FC<IActionAreaCard> = ({
  title,
  image,
  genre,
  isClickable = false,
  onHandleClick,
}) => {
  return (
    <Card
      sx={{ maxWidth: "266px", backgroundColor: "transparent", color: "white" }}
      onClick={onHandleClick}
      className={isClickable ? "Clickable" : ""}
    >
      <CardMedia component="img" height="357px" image={image} alt="poster" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
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
