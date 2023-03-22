import { AppError } from "../../errors/errors";
import { clientRepository } from "../../repositories/clientRepository";
import { listClients } from "../../serializers/client/client.serializers";

export const listClientIdService = async (id: string) => {
  const client = await clientRepository.find({
    relations: { contacts: true },
    where: { id: id },
  });

  if (!client) {
    throw new AppError(404, "Client not exist");
  }

  const validateClient = await listClients.validate(client, {
    stripUnknown: true,
  });

  return validateClient;
};
