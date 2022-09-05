import { v4 as uuid } from "uuid";

import AppDataSource from "../../data-source";
import { Address } from "../../entities/address.entity";
import { Category } from "../../entities/category.entity";
import { Property } from "../../entities/property.entity";
import { AppError } from "../../errors/AppError";
import { IPropertyRequest } from "../../interfaces/properties";

const createPropertyService = async (
  { address, categoryId, size, value }: IPropertyRequest,
  isAdm: boolean
) => {
  if (!isAdm) {
    throw new AppError("Unauthorized", 403);
  }

  const propertyRepository = AppDataSource.getRepository(Property);

  const categoryRepository = AppDataSource.getRepository(Category);

  const addressRepository = AppDataSource.getRepository(Address);

  const addressAlreadyExists = await propertyRepository.findOneBy({ address });

  if (addressAlreadyExists) {
    throw new AppError("This address already has a registered property", 400);
  }

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (!category) {
    throw new AppError("Invalid category", 404);
  }

  if (address.zipCode.length > 8) {
    throw new AppError("Invalid zip code", 400);
  }

  if (address.state.length > 2) {
    throw new AppError("Invalid zip code", 400);
  }

  const newAddress = await addressRepository.save({
    id: uuid(),
    city: address.city,
    district: address.district,
    number: address.number,
    state: address.state,
    zipCode: address.zipCode,
  });

  const property = await propertyRepository.save({
    id: uuid(),
    address: newAddress,
    size,
    value,
    sold: false,
    category,
  });

  return property;
};

export default createPropertyService;
