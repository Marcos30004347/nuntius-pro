import { getDBClient } from "../database/init.js";
import { uploadUserPicture } from "./user.js";

const signup = async (email, username, password, image_base64, about) => {
  try {
    const supabase = getDBClient();
    const { user, session, error } = await supabase.auth.signUp(
      {
        password: password,
        email: email,
      },
      {
        data: {
          username: username,
          about: about,
        },
      }
    );

    if (error) throw error;
    user.access_token = session.access_token;
    //const updatedUser = await uploadUserPicture(user, image_base64);
    //updatedUser.access_token = session.access_token;

    return user;
  } catch (e) {
    console.error(e);
    throw new Error(`error when creting new user with name "${username}"`);
  }
};

const signin = async (email, password) => {
  try {
    const supabase = getDBClient();

    const { data, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });

    if (error) throw error;
    data.user.access_token = data.access_token;
    return data.user;
  } catch (e) {
    console.error(e);
    throw new Error(`error when login user with name "${username}"`);
  }
};

export { signup, signin };
