import { Router } from "express";
import { createSessionController } from "../controllers/session.controllers";

const routes = Router();

export const sessionRoutes = () => {
  routes.post("/", createSessionController);

  return routes;
};
