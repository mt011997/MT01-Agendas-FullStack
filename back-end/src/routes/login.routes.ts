import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import { loginSerializer } from "../serializers/login/login.serializers";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  validateSchemaMiddleware(loginSerializer),
  loginController
);
