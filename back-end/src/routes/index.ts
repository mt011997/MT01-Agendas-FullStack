import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { contactRoutes } from "./contact.routes";
import { loginRoutes } from "./login.routes";

export const globalRoutes = Router();

globalRoutes.use("/clients", clientRoutes);
globalRoutes.use("/login", loginRoutes);
globalRoutes.use("/contacts", contactRoutes);
