import { Router } from "express";
import { clientRoutes } from "./client.routes";

export const globalRoutes = Router();

globalRoutes.use("/clients", clientRoutes);
