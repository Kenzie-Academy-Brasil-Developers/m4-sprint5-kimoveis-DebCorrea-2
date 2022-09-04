import { NextFunction, Request, Response } from "express";
import { SchemaOf } from "yup";

import { IUserRequest } from "../interfaces/users";

const validateUserCreation =
  (schema: SchemaOf<IUserRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        const validatedData = await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        req.userData = validatedData;

        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };

export default validateUserCreation;
