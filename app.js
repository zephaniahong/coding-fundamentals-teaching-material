const express = require("express");
const app = express();
const port = 8000;
const db = require("./db.json");
console.log(db.ditto);

app.get("/", (req, res) => {
  res.send({ data: "hello word" });
});

app.get("/users/:id", (req, res) => {
  console.log(req);
  res.send({ data: "users" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
