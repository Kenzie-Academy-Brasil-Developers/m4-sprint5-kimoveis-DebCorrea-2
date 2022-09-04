import { v4 as uuid } from "uuid";
import { hashSync } from "bcryptjs";

import { IUser, IUserRequest } from "../../interfaces/users";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const userAlreadyExists = await userRepository.findOneBy({ email });

  if (userAlreadyExists) {
    throw new AppError("User already exists", 400);
  }

  const newUser = await userRepository.save({
    id: uuid(),
    name,
    email,
    password: hashSync(password, 10),
    isAdm,
    isActive: true,
  });

  return newUser;
};

export default createUserService;
