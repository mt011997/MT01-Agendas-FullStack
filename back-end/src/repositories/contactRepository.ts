import { AppDataSource } from "../data-source";
import Contact from "../entities/contacts.entity";

export const contactRepository = AppDataSource.getRepository(Contact);
