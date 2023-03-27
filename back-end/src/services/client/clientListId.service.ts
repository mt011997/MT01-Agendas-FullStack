import { AppError } from "../../errors/errors";
import { clientRepository } from "../../repositories/clientRepository";
import { returnClientSerializer } from "../../serializers/client/client.serializers";

export const listClientIdService = async (id: string) => {
  const client = await clientRepository.findOne({
    relations: { contacts: true },
    where: { id: id },
  });

  if (!client) {
    throw new AppError(404, "Client not exist");
  }

  const validateClient = await returnClientSerializer.validate(client, {
    stripUnknown: true,
  });

  return validateClient;
};
