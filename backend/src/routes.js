import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";
import { editProfileHandler, getUserByIdHandler } from "./controllers/user.js";

const routes = Router();

routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);
routes.post("/user/edit", editProfileHandler);
routes.post("/user/get", getUserByIdHandler);

export default routes;
