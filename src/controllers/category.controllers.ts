import { Request, Response } from "express";

import createCategoryService from "../services/categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const { isAdm } = req.user;

  const { name } = req.body;

  const category = await createCategoryService(isAdm, name);

  return res.status(201).json(category);
};

export { createCategoryController };
