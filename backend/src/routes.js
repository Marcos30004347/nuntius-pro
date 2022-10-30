import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";
import { editUserProfileHandler, getUserByIdHandler, uploadUserProfilePictureHandler } from "./controllers/user.js";

const routes = Router();

routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);

routes.get("/user/get/:userid", getUserByIdHandler);
routes.post("/user/profile/edit", editUserProfileHandler);
routes.post("/user/profile/upload-picture", uploadUserProfilePictureHandler);

export default routes;
