import { Router } from "express";

import { createUserController } from "../controllers/user.controllers";
import { listUsersController } from "../controllers/session.controllers";
import validateUserCreation from "../middlewares/validateUserCreation.middleware";
import createUserSchema from "../schemas/createUser.schema";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const userRoutes = () => {
  routes.post(
    "/",
    validateUserCreation(createUserSchema),
    createUserController
  );
  routes.get("/", verifyAuthentication, listUsersController);

  return routes;
};
