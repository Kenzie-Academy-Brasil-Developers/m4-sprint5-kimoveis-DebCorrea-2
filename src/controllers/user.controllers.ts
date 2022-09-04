import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import createUserService from "../services/users/createUser.service";
import listUsersService from "../services/users/listUsers.service";

const createUserController = async (req: Request, res: Response) => {
  const { userData } = req;

  const user = await createUserService(userData);

  return res.status(201).json(instanceToPlain(user));
};

const listUsersController = async (req: Request, res: Response) => {
  const { isAdm } = req.user;

  const users = await listUsersService(isAdm);

  return res.status(200).json(instanceToPlain(users));
};

export { createUserController, listUsersController };
