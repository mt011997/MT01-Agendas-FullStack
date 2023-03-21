import { Request, Response } from "express";
import { iClientUpdate } from "../../interfaces/client.interfaces";
import { clientUpdateService } from "../../services/client/clientUpdate.service";

export const updateClientController = async (req: Request, res: Response) => {
  const clientData: iClientUpdate = req.body;
  const clientId = req.params.id;
  const updateClient = await clientUpdateService(clientData, clientId);

  return res.json(updateClient);
};
