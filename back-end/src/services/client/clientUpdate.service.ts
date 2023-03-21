import { AppError } from "../../errors/errors";
import { iClientUpdate } from "../../interfaces/client.interfaces";
import { clientRepository } from "../../repositories/clientRepository";
import { returnClientSerializer } from "../../serializers/client/client.serializers";

export const clientUpdateService = async (
  clientData: iClientUpdate,
  clientId: string
) => {
  const findClient = await clientRepository.findOneBy({
    id: clientId,
  });

  if (!findClient) {
    throw new AppError(404, "Client not exist");
  }

  const updateClient = clientRepository.create({
    ...findClient,
    ...clientData,
  });

  await clientRepository.save(updateClient);

  const updateReturn = await returnClientSerializer.validate(updateClient, {
    stripUnknown: true,
  });

  return updateReturn;
};
