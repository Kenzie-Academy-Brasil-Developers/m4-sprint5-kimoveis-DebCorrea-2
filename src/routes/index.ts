import { Express } from "express";
import { categoryRoutes } from "./category.routes";
import { sessionRoutes } from "./session.routes";

import { userRoutes } from "./user.routes";

export const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/login", sessionRoutes());
  app.use("/categories", categoryRoutes());
};
