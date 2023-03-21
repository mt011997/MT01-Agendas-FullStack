import { clientRepository } from "../../repositories/clientRepository";
import jwt from "jsonwebtoken";

export const loginService = async (email: string) => {
  const client = await clientRepository.findOneBy({ email });

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
