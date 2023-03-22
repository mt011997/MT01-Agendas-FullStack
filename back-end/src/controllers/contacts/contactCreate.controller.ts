import { Request, Response } from "express";
import { contactCreateService } from "../../services/contact/contactCreate.service";

export const contactCreateController = async (req: Request, res: Response) => {
  const contact = req.body;
  const data = await contactCreateService(contact, req.client.id);
  return res.status(201).json(data);
};
