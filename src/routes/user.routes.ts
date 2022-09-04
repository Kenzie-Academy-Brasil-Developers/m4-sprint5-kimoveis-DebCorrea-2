import { Router } from "express";

import { createUserController } from "../controllers/user.controllers";
import validateUserCreation from "../middlewares/validateUserCreation.middleware";
import createUserSchema from "../schemas/createUser.schema";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "/",
    validateUserCreation(createUserSchema),
    createUserController
  );

  return routes;
};
