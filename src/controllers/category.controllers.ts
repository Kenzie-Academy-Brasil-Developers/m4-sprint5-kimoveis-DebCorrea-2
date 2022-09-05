import { Request, Response } from "express";

import createCategoryService from "../services/categories/createCategory.service";
import listCategoriesService from "../services/categories/listCategories.service";
import listCategoryPropertiesService from "../services/categories/listCategoryProperties.service";

const createCategoryController = async (req: Request, res: Response) => {
  const { isAdm } = req.user;

  const { name } = req.body;

  const category = await createCategoryService(isAdm, name);

  return res.status(201).json(category);
};

const listCategoriesController = async (req: Request, res: Response) => {
  const categories = await listCategoriesService();

  return res.json(categories);
};

const listCategoryPropertiesController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;

  const categoryProperties = await listCategoryPropertiesService(id);

  return res.json(categoryProperties);
};

export {
  createCategoryController,
  listCategoriesController,
  listCategoryPropertiesController,
};
