import { Request, Response } from "express";

export const AboutController = (req: Request, res: Response) => {
  res.render("about.html", {
    title: "About",
  });
};
