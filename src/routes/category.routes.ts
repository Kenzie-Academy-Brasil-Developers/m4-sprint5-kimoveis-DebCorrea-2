import { Router } from "express";

import { createCategoryController } from "../controllers/category.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const categoryRoutes = () => {
  routes.post("/", verifyAuthentication, createCategoryController);

  return routes;
};
