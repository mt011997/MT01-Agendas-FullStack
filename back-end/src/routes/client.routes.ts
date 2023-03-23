import { Router } from "express";
import { createUserController } from "../controllers/clients/clientCreate.controller";
import { deleteClientController } from "../controllers/clients/clientDelete.controller";
import { listAllClientsController } from "../controllers/clients/clientListAll.controller";
import { listClientIdController } from "../controllers/clients/clientListId.controller";
import { updateClientController } from "../controllers/clients/clientUpdate.controller";
import { ensureCorrectUpdateMiddleware } from "../middlewares/correctUpdate.middleware";
import { ensureAuthMiddlreware } from "../middlewares/ensureAuth.middleware";
import { isAdmMiddleware } from "../middlewares/isAdm.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import {
  clientSerializerUpdate,
  createClientSerializer,
} from "../serializers/client/client.serializers";

export const clientRoutes = Router();

clientRoutes.post(
  "",
  createUserController,
  validateSchemaMiddleware(createClientSerializer)
);

clientRoutes.get(
  "",
  ensureAuthMiddlreware,
  isAdmMiddleware,
  listAllClientsController
);

clientRoutes.get("/list", ensureAuthMiddlreware, listClientIdController);

clientRoutes.delete("/delete", ensureAuthMiddlreware, deleteClientController);

clientRoutes.patch(
  "/update",
  ensureAuthMiddlreware,
  validateSchemaMiddleware(clientSerializerUpdate),
  ensureCorrectUpdateMiddleware,
  updateClientController
);
