import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUser } from "../../interfaces/users";

const listUsersService = async (isAdm: boolean): Promise<IUser[]> => {
  if (!isAdm) {
    throw new AppError("Unauthorized", 403);
  }

  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  return users;
};

export default listUsersService;
