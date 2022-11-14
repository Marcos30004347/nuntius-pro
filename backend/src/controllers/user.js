import { editUserProfile, uploadUserPicture } from '../services/user.js';

const editUserProfileHandler = async (request, response) => {
  try {
    const { username, about } = request.body;

    const resp = await editUserProfile(access_token, username, about);

    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const uploadUserProfilePictureHandler = async (request, response) => {
	try {
		const { user, base64 } = request.body;
		uploadUserPicture(user, base64);
	} catch(e) {
    console.error(e);
    return response.status(400).json(e);
	}
}

export { editUserProfileHandler, uploadUserProfilePictureHandler };
