const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// (endpoint)
app.get("/", (req, res) => {
  res.send("API is Running");
});
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note_find = notes.find((n) => n._id === req.params.id);

  console.log(req.params);
  res.send(note_find);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
