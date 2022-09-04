import { compareSync } from "bcryptjs";
import * as jwt from "jsonwebtoken";
import "dotenv/config";

import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
import { IUserLogin } from "../../interfaces/users";

const createSessionService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("Invalid email or password", 403);
  }

  const passwordMatch = compareSync(password, user.password);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password", 403);
  }

  if (!user.isActive) {
    throw new AppError("Invalid user", 403);
  }

  const token = jwt.sign(
    { email: user.email, isAdm: user.isAdm },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

export default createSessionService;
