import { Router } from "express";

import {
  createPropertyController,
  listPropertiesController,
} from "../controllers/property.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const propertyRoutes = () => {
  routes.post("/", verifyAuthentication, createPropertyController);
  routes.get("/", listPropertiesController);

  return routes;
};
