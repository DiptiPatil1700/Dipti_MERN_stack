const axios = require("axios");
const cron = require("node-cron");
const { addBooks } = require("../models/bookModel");

const fetchBooks = async () => {
  try {
    const response = await axios.get("https://gutendex.com/books/");
    const books = response.data.results;

    for (let book of books) {
      const title = book.title;
      const author = book.authors.map((a) => a.name).join(", ");
      const imageUrl = book.formats["image/jpeg"];
      await addBooks(title, author, imageUrl);
    }
  } catch (error) {
    console.log(`Error:`, error);
  }
};
cron.schedule("0 0 * * *", fetchBooks);
fetchBooks();
