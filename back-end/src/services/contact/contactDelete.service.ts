import { AppError } from "../../errors/errors";

import { contactRepository } from "../../repositories/contactRepository";

export const deleteContactService = async (id: string) => {
  const contact = await contactRepository.findOneBy({ id: id });

  if (!contact) {
    throw new AppError(404, "Contact not found");
  }

  await contactRepository.remove(contact);
};
