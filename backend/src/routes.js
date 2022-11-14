import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";
import { editUserProfileHandler, uploadUserProfilePictureHandler } from "./controllers/user.js";

const routes = Router();

const unauthenticatedRoutes = {
    "/auth/signup": true,
    "/auth/signin": true
};
routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);

routes.post("/user/profile/edit", editUserProfileHandler);
routes.post("/user/profile/upload-picture", uploadUserProfilePictureHandler);

export { routes, unauthenticatedRoutes };
