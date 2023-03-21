import { AppError } from "../../errors/errors";
import { iContactRequest } from "../../interfaces/contact.interface";
import { contactRepository } from "../../repositories/contactRepository";
import { returnContactSerializer } from "../../serializers/contacts/contact.serializer";

export const contactCreateService = async (
  data: iContactRequest,
  id: string
) => {
  const findEmailContact = await contactRepository.findOneBy({
    email: data.email,
  });
  const findPhoneContact = await contactRepository.findOneBy({
    phone: data.phone,
  });

  if (findEmailContact) throw new AppError(409, "Email already exists");

  if (findPhoneContact) throw new AppError(409, "Phone already exists");

  const contactData = contactRepository.create({
    ...data,
    client: id,
  });

  await contactRepository.save(contactData);

  const returnNewContact = await returnContactSerializer.validate(contactData, {
    stripUnknown: true,
  });

  return returnNewContact;
};
