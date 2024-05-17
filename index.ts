import express, { Express, Response } from "express";
import knex from "knex";
import { Model } from "objection";
import { config } from "dotenv";
import { ArticlesModel } from "./src/db/models/articles";

config();

import router from "./src/routers";
import knexInstance from "./src/db";

const app: Express = express();
const port = process.env.PORT || 8000;

Model.knex(knexInstance);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", router);

app.use((req, res) => {
  res.status(404).json({
    code: 404,
    status: "error",
    message: "Route not found",
    data: null,
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
