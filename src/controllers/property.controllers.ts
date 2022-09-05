import { Request, Response } from "express";

import createPropertyService from "../services/properties/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const { value, size, address, categoryId } = req.body;

  const { isAdm } = req.user;

  const property = await createPropertyService(
    { address, size, value, categoryId },
    isAdm
  );

  return res.status(201).json(property);
};

export { createPropertyController };
