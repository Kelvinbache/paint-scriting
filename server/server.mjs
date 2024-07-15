import express from "express";
import { join } from "path";

const app = express();
const port = 3000;
const ___dirname = process.cwd();
const view = join(___dirname, "view", "v1", "public","html","index.ejs");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render(view)
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
