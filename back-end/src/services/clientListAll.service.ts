import { clientRepository } from "../repositories/clientRepository";
import { listClients } from "../serializers/client/client.serializers";

export const listAllClientsService = async () => {
  const clients = await clientRepository.find({
    relations: { contacts: true },
  });

  const validateClients = await listClients.validate(clients, {
    stripUnknown: true,
  });
  return validateClients!;
};
