import { Router } from "express";
import { signinHandler, signupHandler } from "./controllers/auth.js";
import { editUserProfileHandler, getUserByIdHandler, uploadUserProfilePictureHandler } from "./controllers/user.js";
import { listRoomParticipantsHandler } from "./controllers/room.js";

const routes = Router();

const unauthenticatedRoutes = {
    "/auth/signup": true,
    "/auth/signin": true
};
routes.post("/auth/signup", signupHandler);
routes.post("/auth/signin", signinHandler);

routes.get("/user/get/:userid", getUserByIdHandler);
routes.post("/user/profile/edit", editUserProfileHandler);
routes.post("/user/profile/upload-picture", uploadUserProfilePictureHandler);


routes.post("/room/participants", listRoomParticipantsHandler);

export { routes, unauthenticatedRoutes };
