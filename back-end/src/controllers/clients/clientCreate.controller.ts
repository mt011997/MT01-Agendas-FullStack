import { Request, Response } from "express";
import { createClientService } from "../../services/client/clientCreate.service";

export const createUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const data = await createClientService(user);

  return res.status(201).json(data);
};
