const express = require("express");
const bookRoutes = require("./src/routes/books");
const cronService = require("./src/services/cronService.js");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/books", bookRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
