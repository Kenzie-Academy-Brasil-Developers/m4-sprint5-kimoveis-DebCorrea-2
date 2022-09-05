import { Router } from "express";

import {
  createCategoryController,
  listCategoriesController,
} from "../controllers/category.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", verifyAuthentication, createCategoryController);
  routes.get("/", listCategoriesController);

  return routes;
};
