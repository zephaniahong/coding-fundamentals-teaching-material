// create any javascript file
// open terminal: download express
// run: npm install express --save

// other package managers: yarn, pnpm
const express = require("express");
const app = express();
const port = 8000; // 3000

const db = require("./db.json");

app.post("/book/:start/:destination", (req, res) => {
  // complex logic here
  // figure out which cab is in vicinity
  // add a row in the DB
});
// endpoint, api route
app.get("/pokemon/chicken/:pokemonName/:id", (req, res) => {
  // res.send({ data: "hello word" });
  // sql
  const p = req.params;
  const id = req.params.id;
  const pokemon = req.params.pokemonName;
  // console.log(p);
  // const pokemon = p.pokemonName;
  // res.send(db[pokemon]);
  res.send(p);
});

// app.get("/pokemon/charizard", (req, res) => {
//   // res.send({ data: "hello word" });
//   res.send({
//     abilities: [{ ability: { name: "limber" } }],
//   });
// });

// app.get("/users/:id", (req, res) => {
//   console.log(req);
//   res.send({ data: "users" });
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
