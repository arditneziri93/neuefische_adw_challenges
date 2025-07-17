import express from "express";
import nunjucks from "nunjucks";
import path from "path";
import fs from "fs";
import crypto from "crypto";
import DOMPurify from "isomorphic-dompurify";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "../public/assets")));

nunjucks.configure("src/views", {
  autoescape: true,
  express: app,
});

app.get("/", (_, res) => {
  res.render("index.njk", {
    title: "Burn on Read",
    message: "Send a secret message that self-destructs after reading.",
  });
});

app.post("/submit", (req, res) => {
  const rawMessage = req.body.message;
  const password = req.body.password;

  const id = crypto.randomUUID();
  const filePath = path.join("tmp", `${id}.json`);

  const payload = {
    message: DOMPurify.sanitize(rawMessage),
    password: password || null,
  };

  fs.mkdirSync("tmp", { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(payload));

  const link = `${req.protocol}://${req.get("host")}/view/${id}`;
  res.render("success.njk", { title: "Message Created", link });
});

app.get("/view/:id", (req, res) => {
  const id = req.params.id;
  const filePath = path.join("tmp", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).render("error.njk", {
      title: "Not Found",
      message: "This message has already been read or never existed.",
    });
  }

  const { password } = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  if (password) {
    return res.render("password.njk", { id, title: "Password Required" });
  }

  const { message } = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  fs.unlinkSync(filePath);

  res.render("view.njk", { title: "Burned Message", message });
});

app.post("/unlock/:id", (req, res) => {
  const id = req.params.id;
  const inputPassword = req.body.password;
  const filePath = path.join("tmp", `${id}.json`);

  if (!fs.existsSync(filePath)) {
    return res.status(404).render("error.njk", {
      title: "Not Found",
      message: "This message has already been read or never existed.",
    });
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  if (data.password !== inputPassword) {
    return res.status(401).render("error.njk", {
      title: "Unauthorized",
      message: "Incorrect password.",
    });
  }

  const message = data.message;
  fs.unlinkSync(filePath);

  res.render("view.njk", { title: "Burned Message", message });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
