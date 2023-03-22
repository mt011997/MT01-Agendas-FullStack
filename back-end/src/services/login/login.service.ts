import { clientRepository } from "../../repositories/clientRepository";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors/errors";

export const loginService = async (email: string) => {
  const client = await clientRepository.findOneBy({ email });

  if (!client?.isActive) {
    throw new AppError(400, "Client is not active");
  }

  if (!client) {
    throw new AppError(404, "Client not found");
  }

  const token = jwt.sign(
    {
      isAdm: client?.isAdm,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: client?.id,
    }
  );

  return { token: token };
};
