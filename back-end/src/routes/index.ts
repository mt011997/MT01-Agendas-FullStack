import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { loginRoutes } from "./login.routes";

export const globalRoutes = Router();

globalRoutes.use("/clients", clientRoutes);
globalRoutes.use("/login", loginRoutes);
