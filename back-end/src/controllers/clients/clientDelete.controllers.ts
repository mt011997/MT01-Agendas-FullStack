import { Request, Response } from "express";
import { deleteClientService } from "../../services/clientDelete.service";

export const deleteClientController = async (req: Request, res: Response) => {
  const deleteClient = await deleteClientService(req.params.id);
  return res.status(204).json(deleteClient);
};
