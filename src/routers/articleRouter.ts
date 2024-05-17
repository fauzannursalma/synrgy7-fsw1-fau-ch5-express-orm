import { Router } from "express";
import { ArticlesController } from "../controllers/articlesController";

const router = Router();

router.get("/", new ArticlesController().articleList);
router.get("/:id", new ArticlesController().articleDetail);
router.post("/", new ArticlesController().articleCreate);
router.delete("/:id", new ArticlesController().articleDelete);
router.put("/:id", new ArticlesController().articleUpdate);

export default router;
