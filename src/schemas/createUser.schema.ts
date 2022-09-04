import * as yup from "yup";
import { SchemaOf } from "yup";

import { IUserRequest } from "../interfaces/users";

const createUserSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required().min(3),
  email: yup.string().email().required(),
  isAdm: yup.boolean().required(),
  password: yup.string().required(),
});

export default createUserSchema;
