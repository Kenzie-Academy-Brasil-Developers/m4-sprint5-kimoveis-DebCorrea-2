import { Router } from "express";

import createScheduleController from "../controllers/schedule.controllers";
import verifyAuthentication from "../middlewares/verifyAuthentication.middleware";

const routes = Router();

export const scheduleRoutes = () => {
  routes.post("/", verifyAuthentication, createScheduleController);

  return routes;
};
