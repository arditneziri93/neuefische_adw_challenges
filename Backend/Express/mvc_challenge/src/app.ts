import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log("called");
  console.log(`Server running at http://localhost:${port}`);
});
