import express from "express";
import { join } from "path";

const app = express();
const port = 3000;
const ___dirname = process.cwd();
const path = join(___dirname,"view", "ejs", "template", "v1", "index.ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render(path);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
