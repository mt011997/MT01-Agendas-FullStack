import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

export const isAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { client } = req;

  if (!client.isAdm) {
    throw new AppError(403, "Missing ADM authorization");
  }

  return next();
};
