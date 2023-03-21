import { AppError } from "../../errors/errors";
import { clientRepository } from "../../repositories/clientRepository";

export const deleteClientService = async (id: string) => {
  const clientFind = await clientRepository.findOneBy({
    id: id,
  });

  if (!clientFind) {
    throw new AppError(404, "Client not found");
  }

  if (!clientFind.isActive) {
    throw new AppError(400, "Client is not active");
  }

  const clientDelete = await clientRepository.save({
    ...clientFind,
    isActive: false,
  });

  return {};
};
