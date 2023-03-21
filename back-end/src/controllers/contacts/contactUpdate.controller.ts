import { Request, Response } from "express";
import { contactUpdateService } from "../../services/contact/contactUpdate.service";

export const contactUpdateController = async (req: Request, res: Response) => {
  const contact = req.body;
  const contactId = req.params.id;
  const updateContact = await contactUpdateService(contact, contactId);

  return res.status(200).json(updateContact);
};
