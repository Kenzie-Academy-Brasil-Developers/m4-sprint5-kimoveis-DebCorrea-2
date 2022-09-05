import AppDataSource from "../../data-source";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";

const listCategoryPropertiesService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const propertyRepository = AppDataSource.getRepository(Property);

  const category = await categoryRepository.findOneBy({ id });

  if (!category) {
    throw new AppError("Category not found", 404);
  }

  const properties = await propertyRepository.findBy({ category });

  const result = {
    id: category.id,
    name: category.name,
    properties,
  };

  return result;
};

export default listCategoryPropertiesService;
