import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

export const ensureCorrectUpdateMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const keys = Object.keys(req.body);
  if (
    keys.includes("id") ||
    keys.includes("isActive") ||
    keys.includes("isAdm")
  ) {
    throw new AppError(401, "Cannot update");
  }

  return next();
};
