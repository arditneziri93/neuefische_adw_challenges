import { Request, Response } from "express";

export const ContactController = (req: Request, res: Response) => {
  res.render("contact.html", {
    title: "Contact",
  });
};
