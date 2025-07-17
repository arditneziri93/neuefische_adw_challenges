import { Request, Response } from "express";
import { getEntries } from "../blog_entries";

export const PostController = (req: Request, res: Response, slug: string) => {
  const entries = getEntries();
  const entry = entries.find((e) => e.slug === slug);

  if (!entry) {
    return res.status(404).render("404.html", { title: "404" });
  }

  res.render("post.html", {
    title: entry.title,
    entry,
  });
};
