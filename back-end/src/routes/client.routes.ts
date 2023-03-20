import { Router } from "express";
import { createUserController } from "../controllers/clients/clientCreate.controller";

export const clientRoutes = Router();

clientRoutes.post("", createUserController);
