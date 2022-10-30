import { getDBClient } from "../database/init.js";
import { uploadUserPicture } from "./user.js";

const signup = async (email, username, password, image_base64) => {
  try {
    const supabase = getDBClient();

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: username,
        },
      },
    });
		
    if (error) throw error;

		console.log(data)

		uploadUserPicture(data?.session?.access_token, image_base64);

		return {
      accessToken: data?.session?.access_token,
      refreshToken: data?.session?.refresh_token,
      expiresAt: data?.session?.expires_at,
      expiresAt: data?.session?.user.id
    };
  } catch (e) {
    console.log(e);
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
		console.log(data)
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token,
      expiresAt: data.expires_at,
    };
  } catch (e) {
    console.log(e);
    throw new Error(`error when creting new user with name "${username}"`);
  }
};


export { signup, signin };
