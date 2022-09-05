import { Router } from "express";

import {
  createCategoryController,
  listCategoriesController,
  listCategoryPropertiesController,
} from "../controllers/category.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", verifyAuthentication, createCategoryController);
  routes.get("/", listCategoriesController);
  routes.get("/:id/properties", listCategoryPropertiesController);

  return routes;
};
