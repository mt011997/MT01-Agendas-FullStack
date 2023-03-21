import { Request, Response } from "express";
import { listClientIdService } from "../../services/client/clientListId.service";

export const listClientIdController = async (req: Request, res: Response) => {
  const clientId = await listClientIdService(req.params.id);
  return res.json(clientId);
};
