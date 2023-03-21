import { Router } from "express";
import { contactCreateController } from "../controllers/contacts/contactCreate.controller";
import { deleteContactController } from "../controllers/contacts/contactDelete.controller";
import { contactUpdateController } from "../controllers/contacts/contactUpdate.controller";
import { ensureAuthMiddlreware } from "../middlewares/ensureAuth.middleware";
import validateSchemaMiddleware from "../middlewares/validateSchema.middleware";
import {
  requestContactSerializer,
  updateContactSerializer,
} from "../serializers/contacts/contact.serializer";

export const contactRoutes = Router();

contactRoutes.post(
  "",
  ensureAuthMiddlreware,
  validateSchemaMiddleware(requestContactSerializer),
  contactCreateController
);
contactRoutes.delete("/:id", ensureAuthMiddlreware, deleteContactController);

contactRoutes.patch(
  "/:id",
  ensureAuthMiddlreware,
  validateSchemaMiddleware(updateContactSerializer),
  contactUpdateController
);
