// express-server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello z Express!");
});

app.listen(3000, () => {
  console.log("Serwer Express działa na http://localhost:3000");
});