import { AppError } from "../errors/errors";
import { iClientRequest } from "../interfaces/client.interfaces";
import { clientRepository } from "../repositories/clientRepository";
import { returnClientSerializer } from "../serializers/client/client.serializers";

export const createClientService = async (data: iClientRequest) => {
  const findClient = await clientRepository.findOneBy({ email: data.email });
  const findPhone = await clientRepository.findOneBy({ phone: data.phone });

  if (findClient) throw new AppError(409, "email already exists");

  if (findPhone) throw new AppError(409, "Phone already exists");

  const client = clientRepository.create(data);

  await clientRepository.save(client);

  const returnNewClient = await returnClientSerializer.validate(client, {
    stripUnknown: true,
  });

  return returnNewClient;
};
