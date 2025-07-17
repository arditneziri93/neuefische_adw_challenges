import { Request, Response } from "express";
import { getEntries } from "../blog_entries";

export const HomeController = (req: Request, res: Response) => {
  res.render("index.html", {
    title: "Home",
    entries: getEntries(),
  });
};
