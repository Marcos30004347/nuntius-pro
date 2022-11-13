import { getDBClient } from "../database/init.js";

import { uploadImage } from './images.js';

const getUserById = async (userId) => {
  try {
    const supabase = getDBClient();
    const { user, error } = await supabase.auth.api.getUserById(userId);

    if (error) throw error;
        console.log(data)
    return {
      username: user.user_metadata.username,
      email: user.email,
      id: user.id,
      about: user.user_metadata.about,
			image_url: user.user_metadata.image_url
    };
  } catch (e) {
    throw new Error(`Error: error finding user with id "${e}"`);
  }
};

const editUserProfile = async (access_token, username, about) => {
  try {
    const supabase = getDBClient();

    const { error } = await supabase.auth.admin.updateUserById(
      access_token,
      {
        user_metadata: {
          username: username,
          about: about
        }
      }
    );

    if (error) throw error;

    console.log(data)

    return {
      about: about,
      username: username
    };

  } catch (e) {
    throw new Error(`Error: error updating user with token "${e}"`);
  }
};

const uploadUserPicture = async (access_token, base64) => {
  try {
    const supabase = getDBClient();
		const { user, userError } = await supabase.auth.api.getUser(access_token);
    if (userError) throw userError;
		const { image_url } = await uploadImage(user.id, base64);

    console.log(user);
    const { error } = await supabase.auth.api.updateUser(
      access_token,
      {
        user_metadata: {
          image_url: image_url,
        }
      }
    );

		if (error) throw error;

    return {
      image_url: image_url,
    };

  } catch (e) {
    throw new Error(`Error: error uploading image "${e}"`);
  }
};

export { editUserProfile, getUserById, uploadUserPicture };