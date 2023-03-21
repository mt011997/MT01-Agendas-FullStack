import { AppError } from "../../errors/errors";
import { iContactUpdate } from "../../interfaces/contact.interface";
import { contactRepository } from "../../repositories/contactRepository";
import { returnContactSerializer } from "../../serializers/contacts/contact.serializer";

export const contactUpdateService = async (
  contactData: iContactUpdate,
  contactId: string
) => {
  const findContact = await contactRepository.findOneBy({
    id: contactId,
  });
  console.log(contactData);
  console.log(contactId);
  console.log(findContact);
  if (!findContact) {
    throw new AppError(404, "Contact not exist");
  }

  const updateContact = await contactRepository.save({
    ...findContact,
    ...contactData,
  });

  const updateReturn = await returnContactSerializer.validate(updateContact, {
    stripUnknown: true,
  });

  return updateReturn;
};
