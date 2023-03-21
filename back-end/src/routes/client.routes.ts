import { Router } from "express";
import { createUserController } from "../controllers/clients/clientCreate.controller";
import { listAllClientsController } from "../controllers/clients/clientListAll.controller";

export const clientRoutes = Router();

clientRoutes.post("", createUserController);
clientRoutes.get("", listAllClientsController);
