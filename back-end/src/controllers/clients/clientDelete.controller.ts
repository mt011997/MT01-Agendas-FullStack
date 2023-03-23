import { Request, Response } from "express";
import { deleteClientService } from "../../services/client/clientDelete.service";

export const deleteClientController = async (req: Request, res: Response) => {
  const deleteClient = await deleteClientService(req.client.id);
  return res.status(204).json(deleteClient);
};
