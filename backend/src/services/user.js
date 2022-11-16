import { getDBClient } from "../database/init.js";
import { uploadImage } from './images.js';

const getUserProfile = async (token) => {
	try {
		const supabase = getDBClient();

		const { user, error } = await supabase.auth.api.getUser(token);

		if (error) throw error;

		return user;
	} catch (e) {
		throw new Error(`Error: error updating user with token "${e}"`);
	}
};

const editUserProfile = async (token, username, about, image_base64) => {
	try {
		const supabase = getDBClient();

		const { user, error } = await supabase.auth.api.updateUser(
			token,
			{
				data: {
					username: username,
					about: about
				}
			}
		);
		
		if (error) throw error;

		if(image_base64) {
			uploadUserPicture(token, user.id, image_base64);
		}	
		
		return user;
	} catch (e) {
		throw new Error(`Error: error updating user with token "${e}"`);
	}
};

const uploadUserPicture = async (token, userId, base64) => {
	try {
		const supabase = getDBClient();

		if (base64) {
			const { image_url } = await uploadImage(userId, base64);
			const { user, error } = await supabase.auth.api.updateUser(
				token,
				{
					data: {
						image_url: image_url,
					}
				}
			);

			if (error) throw error;
			return user;
		}

		let storage = supabase.storage.from("nuntius-profile-images");

		const { user, error } = await supabase.auth.api.updateUser(
			token,
			{
				data: {
					image_url: storage.getPublicUrl("public/default.png").publicURL,
				}
			}
		);

		if (error) throw error;

		return user;

	} catch (e) {
		console.error(e);
		throw new Error(`Error: error uploading image "${e}"`);
	}
};

export { editUserProfile, uploadUserPicture, getUserProfile };
