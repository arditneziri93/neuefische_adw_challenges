import express from "express";
import cors from "cors";
import nunjucks from "nunjucks";
import path from "path";
import { get } from "http";
const port = 3000;
import { getEntries } from "./blog_entries";

const app = express();

app.use(cors());
nunjucks.configure("src/templates", {
  autoescape: true,
  express: app,
});

app.use("/css", express.static(path.join(__dirname, "../public/css")));
app.use("/js", express.static(path.join(__dirname, "../public/js")));
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

app.get("/", (req, res) => {
  res.render("index.html", {
    title: "Home",
  });
});

app.get("/index.html", (req, res) => {
  res.render("index.html", {
    title: "Home",
    entries: getEntries(),
  });
});

app.get("/about.html", (req, res) => {
  res.render("about.html", {
    title: "About",
  });
});

app.get("/contact.html", (req, res) => {
  res.render("contact.html", {
    title: "Contact",
  });
});

app.get("/:slug", (req, res) => {
  const entries = getEntries();
  const entry = entries.find((e) => e.slug === req.params.slug);

  if (!entry) {
    return res.status(404).render("404.html", { title: "404" });
  }

  res.render("post.html", {
    title: entry.title,
    entry,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
