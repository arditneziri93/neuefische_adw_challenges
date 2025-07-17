import express from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import path from "path";
import { get } from "http";
const port = 3000;

import { AboutController } from "./controllers/about_controller";
import { HomeController } from "./controllers/home_controller";
import { ContactController } from "./controllers/contact_controller";
import { PostController } from "./controllers/post_controller";

const app = express();

app.use(cors());
nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app.use("/css", express.static(path.join(__dirname, "../public/css")));
app.use("/js", express.static(path.join(__dirname, "../public/js")));
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

app.get("/", HomeController);

app.get("/index.html", HomeController);

app.get("/about.html", AboutController);

app.get("/contact.html", ContactController);

app.get("/:slug", (req, res) => {
  PostController(req, res, req.params.slug);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
