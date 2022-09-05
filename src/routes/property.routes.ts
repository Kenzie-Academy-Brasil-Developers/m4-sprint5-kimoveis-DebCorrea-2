import { Router } from "express";

import { createPropertyController } from "../controllers/property.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const propertyRoutes = () => {
  routes.post("/", verifyAuthentication, createPropertyController);

  return routes;
};
