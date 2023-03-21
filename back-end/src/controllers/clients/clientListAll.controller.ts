import { Request, Response } from "express";
import { listAllClientsService } from "../../services/client/clientListAll.service";

export const listAllClientsController = async (req: Request, res: Response) => {
  const data = await listAllClientsService();

  return res.status(200).json(data);
};
