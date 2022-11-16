import {
  editUserProfile,
  uploadUserPicture,
  getUserProfile,
} from "../services/user.js";

const getUserHandler = async (request, response) => {
  try {
    const token = request.headers.authorization;

    const user = await getUserProfile(token);

    return response.json(user);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const editUserProfileHandler = async (request, response) => {
  try {
    const { username, about } = request.body;

    const user = await editUserProfile(request.body.user, username, about);

    user.access_token = request.body.user.access_token;
    return response.json(userData);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const uploadUserProfilePictureHandler = async (request, response) => {
  try {
    const { user, base64 } = request.body;
    uploadUserPicture(user, base64);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export {
  editUserProfileHandler,
  uploadUserProfilePictureHandler,
  getUserHandler,
};
