import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <Card sx={{ width: 300, height: 250 }}>
      <CardMedia
        component="img"
        height="150"
        image={book.image_url}
        alt={book.name}
      />
      <CardContent sx={{ margin: -1 }}>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body1">{book.author}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
