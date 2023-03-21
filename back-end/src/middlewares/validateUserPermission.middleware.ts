import { NextFunction, Request, Response } from "express";

export const validateUserPermissionMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idparam = req.params.id;
  const idtoken = req.client.id;

  if (idparam !== idtoken && !req.client.isAdm)
    return res
      .status(401)
      .json({ message: "User can just list/update/delete himself" });

  return next();
};
