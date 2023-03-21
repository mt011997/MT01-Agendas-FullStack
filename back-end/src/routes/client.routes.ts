import { Router } from "express";
import { createUserController } from "../controllers/clients/clientCreate.controller";
import { deleteClientController } from "../controllers/clients/clientDelete.controllers";
import { listAllClientsController } from "../controllers/clients/clientListAll.controller";

export const clientRoutes = Router();

clientRoutes.post("", createUserController);
clientRoutes.get("", listAllClientsController);
clientRoutes.delete("/:id", deleteClientController);
