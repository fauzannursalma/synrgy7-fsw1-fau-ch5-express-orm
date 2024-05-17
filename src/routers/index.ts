import express from "express";
import articleRouter from "./articleRouter";

const router = express.Router();

router.use("/articles", articleRouter);

export default router;
