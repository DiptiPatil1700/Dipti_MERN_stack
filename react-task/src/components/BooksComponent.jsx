import axios from "axios";
import React, { useEffect, useState } from "react";
import BookGrid from "./BookGrid";
import { Button, Stack, TextField } from "@mui/material";

const BooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/books", {
          params: { search, page },
        });
        setBooks(response?.data);
      } catch (error) {}
    };
    fetchBooks();
  }, [search, page]);

  return (
    <Stack spacing={2} alignItems="center" p={4}>
      <TextField
        label="Search"
        value={search}
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
        fullWidth
      />

      <BookGrid books={books} />
      <Stack direction="row" spacing={2}>
        <Button
          variant="outlined"
          color="primary"
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previos
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </Button>
      </Stack>
    </Stack>
  );
};

export default BooksComponent;
