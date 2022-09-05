import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string, isAdm: boolean) => {
  if (!isAdm) {
    throw new AppError("Unauthorized", 403);
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("Can't delete unexisting user", 404);
  }

  if (!user.isActive) {
    throw new AppError("Can't delete inactive user", 400);
  }

  const deletedUser = await userRepository.update({ id }, { isActive: false });

  return deletedUser;
};

export default deleteUserService;
