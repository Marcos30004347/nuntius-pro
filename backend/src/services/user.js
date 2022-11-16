import { getDBClient } from "../database/init.js";
import { uploadImage } from "./images.js";

const getUserProfile = async (token) => {
  try {
    const supabase = getDBClient();
    const { user, error } = await supabase.auth.api.getUser(token);

    if (error) throw error;

    return {
      email: user.email,
      username: user.user_metadata.username,
      image_url: user.user_metadata.image_url,
      about: "It's all about",
    };
  } catch (e) {
    throw new Error(`Error: error getting user with token "${e}"`);
  }
};

const editUserProfile = async (receivedUser, username, about) => {
  try {
    const supabase = getDBClient();

    const { user, error } = await supabase.auth.api.updateUser(
      receivedUser.access_token,
      {
        data: {
          username: username,
          about: about,
        },
      }
    );

    if (error) throw error;
    return user;
  } catch (e) {
    throw new Error(`Error: error updating user with token "${e}"`);
  }
};

const uploadUserPicture = async (receivedUser, base64) => {
  try {
    const supabase = getDBClient();
    const { image_url } = await uploadImage(receivedUser.id + new Date().toISOString(), base64);
    const { user, error } = await supabase.auth.api.updateUser(
      receivedUser.access_token,
      {
        data: {
          image_url: image_url,
        },
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
