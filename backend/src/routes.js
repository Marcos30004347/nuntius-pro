import { Router } from "express";
import { createAccount } from "./controllers/auth.js";

const routes = Router();

routes.post("/auth/signup", createAccount);

export default routes;
