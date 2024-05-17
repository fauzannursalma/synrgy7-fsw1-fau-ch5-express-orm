import { Response, Request } from "express";
import { ArticlesModel } from "../db/models/articles";

export class ArticlesController {
  articleList = async (_: Request, res: Response) => {
    const articles = await ArticlesModel.query();
    res.json({ data: articles });
  };

  articleDetail = async (req: Request, res: Response) => {
    const article = await ArticlesModel.query().findById(req.params.id);
    res.json({ data: article });
  };

  articleCreate = async (req: Request, res: Response) => {
    const article = await ArticlesModel.query().insert(req.body);
    res.json({ message: "Article Created!", data: article });
  };

  articleUpdate = async (req: Request, res: Response) => {
    const article = await ArticlesModel.query().findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    await ArticlesModel.query().findById(req.params.id).patch(req.body);
    res.json({ message: "Article updated!", data: article });
  };

  articleDelete = async (req: Request, res: Response) => {
    const article = await ArticlesModel.query().findById(req.params.id);
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }
    await ArticlesModel.query().deleteById(req.params.id);
    res.json({ message: "Article deleted!" });
  };
}
