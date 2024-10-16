const { getBooks } = require("../models/bookModel");

exports.getBooks = async (req, res) => {
  const { search = "", page = 1 } = req.query;
  const limit = 20;
  const offset = (page - 1) * limit;

  try {
    const books = await getBooks(search, limit, offset);
    res.json(books);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
