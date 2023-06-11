import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const ActionAreaCard = () => {
  return (
    <Card
      sx={{ maxWidth: '266px', backgroundColor: "transparent", color: "white" }}
    >
      <CardMedia
        component="img"
        height="357px"
        image="https://critter.science/wp-content/uploads/2018/10/gi1a-1180x520.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ color: "#AFB2B6" }}
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
