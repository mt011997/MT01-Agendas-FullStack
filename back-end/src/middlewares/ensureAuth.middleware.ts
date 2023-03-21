import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";
import jwt from "jsonwebtoken";

export const ensureAuthMiddlreware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing authorization token");
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY as string, (error, decoded: any) => {
    if (error) {
      throw new AppError(401, error.message);
    }

    req.client = {
      id: decoded.sub,
      isAdm: decoded.isAdm,
    };
    return next();
  });
};
