import { v4 as uuid } from "uuid";

import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { AppError } from "../../errors/AppError";

const createCategoryService = async (isAdm: boolean, name: string) => {
  if (!isAdm) {
    throw new AppError("Unauthorized", 401);
  }

  const categoryRepository = AppDataSource.getRepository(Category);

  const categoryExists = await categoryRepository.findOneBy({ name });

  if (categoryExists) {
    throw new AppError("Category already exists");
  }

  const category = await categoryRepository.save({
    id: uuid(),
    name,
  });

  return category;
};

export default createCategoryService;
