const express = require("express");

const server = express();

const PORT = 4000;

server.listen(PORT, () => {
  console.log(PORT + "💙 SERVER START");
});

server.get("/", (req, res) => {
  res.send("✅ First App");
});
