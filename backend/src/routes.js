import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";

const routes = Router();

routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);

export default routes;
