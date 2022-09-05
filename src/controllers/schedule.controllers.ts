import { Request, Response } from "express";

import createScheduleService from "../services/schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;

  const { id } = req.user;

  const schedule = await createScheduleService({
    date,
    hour,
    propertyId,
    userId: id,
  });

  return res.status(201).json(schedule);
};

export default createScheduleController;
