import { getDBClient } from "../database/init.js";

const editProfile = async (access_token, username, about) => {
  try {
    const supabase = getDBClient();

    const { data: user, error } = await supabase.auth.admin.updateUserById(
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
    console.log(e);
    throw new Error(`error when creting new user with name "${username}"`);
  }
};

const getUserById = async (userId) => {
  try {
    const supabase = getDBClient();
    const { user, error } = await supabase.auth.api.getUserById(access_token);

    if (error) throw error;
        console.log(data)
    return {
      username: user.user_metadata.username,
      email: user.email,
      id: user.id,
      about: user.user_metadata.about
      // TODO: Add the photo CDN link to the user metadata
    };
  } catch (e) {
    console.log(e);
    throw new Error(`error when creting new user with name "${username}"`);
  }
};


export { editProfile, getUserById };
