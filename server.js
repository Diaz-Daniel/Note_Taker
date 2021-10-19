const express = require("express");
const path = require("path");

const PORT = 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
