import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";
import { editUserProfileHandler, uploadUserProfilePictureHandler } from "./controllers/user.js";
import { listRoomParticipantsHandler } from "./controllers/room.js";

const routes = Router();

const unauthenticatedRoutes = {
    "/auth/signup": true,
    "/auth/signin": true
};
routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);

routes.post("/user/profile/edit", editUserProfileHandler);
routes.post("/user/profile/upload-picture", uploadUserProfilePictureHandler);

routes.get("/room/:roomName/participants", listRoomParticipantsHandler);

export { routes, unauthenticatedRoutes };
