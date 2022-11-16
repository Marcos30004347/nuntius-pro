import {
  editUserProfile,
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
    const token = request.headers.authorization;

    const { username, about, base64 } = request.body;

    const user = await editUserProfile(token, username, about, base64);

    return response.json(user);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export {
  editUserProfileHandler,
  getUserHandler,
};
