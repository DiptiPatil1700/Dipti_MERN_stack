const pool = require("../../db");
const addBooks = async (title, author, imageUrl) => {
  const query = `INSERT INTO books (title, author, image_url) VALUES ($1, $2, $3)`;
  await pool.query(query, [title, author, imageUrl]);
};

const getBooks = async (search = "", limit = 20, offset = 0) => {
  try {
    const query = `
    SELECT * FROM books
    WHERE title ILIKE $1 OR author ILIKE $1
    LIMIT $2 OFFSET $3
    `;
    const result = await pool.query(query, [`%${search}%`, limit, offset]);
    return result.rows;
  } catch (error) {
    console.error("Error in getBooks model function:", error);
    throw error;
  }
};

module.exports = { getBooks, addBooks };
