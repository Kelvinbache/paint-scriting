import express from "express";
import { join } from "path";

const app = express();
const port = 3000;
const ___dirname = process.cwd();

app.use(express.static("public"));

app.set("view engine", "ejs");

app.use("/recursos", express.static(join(___dirname, "/public")));

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
