import { Request, Response } from "express";
import { deleteContactService } from "../../services/contact/contactDelete.service";

export const deleteContactController = async (req: Request, res: Response) => {
  const deleteContact = await deleteContactService(req.params.id);
  return res.status(204).json(deleteContact);
};
