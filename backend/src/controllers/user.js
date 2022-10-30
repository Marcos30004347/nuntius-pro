import { editUserProfile, uploadUserPicture, getUserById} from '../services/user';

const editUserProfileHandler = async (request, response) => {
  try {
    const { access_token, data: { username, about} } = request.body;

    const resp = await editUserProfile(access_token, username, about);
		
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const uploadUserProfilePictureHandler = async (request, response) => {
	try {
		const { access_token, data: { base64 } } = request.body;
		uploadUserPicture(access_token, base64);
	} catch(e) {
    console.error(e);
    return response.status(400).json(e);
	}
}

const getUserByIdHandler = async (request, response) => {
  try {
    const userId  = request.params.tagId;
    const resp = await getUserById(userId);
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { editUserProfileHandler, uploadUserProfilePictureHandler, getUserByIdHandler };
