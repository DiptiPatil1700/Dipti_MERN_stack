import { Grid2 } from "@mui/material";
import React from "react";
import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  return (
    <Grid2 container spacing={3}>
      {books?.map((book) => (
        <Grid2 item key={book.id} xs={12} sm={4} md={4} lg={4}>
          <BookCard book={book} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default BookGrid;
