import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";

import createSessionService from "../services/sessions/createSession.service";
import listUsersService from "../services/users/listUsers.service";

const createSessionController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await createSessionService({ email, password });

  return res.status(200).json({ token });
};

const listUsersController = async (req: Request, res: Response) => {
  const { isAdm } = req.user;

  const users = await listUsersService(isAdm);

  return res.status(200).json(instanceToPlain(users));
};

export { createSessionController, listUsersController };
