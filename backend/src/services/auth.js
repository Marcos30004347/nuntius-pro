import { getDBClient } from "../database/init.js";

const signup = async (email, username, password) => {
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
    console.log(data);
    return {
      accessToken: data?.session?.access_token,
      refreshToken: data?.session?.refresh_token,
      expiresAt: data?.session?.expires_at,
    };
  } catch (e) {
    console.log(e);
    throw new Error(`error when creting new user with name "${username}"`);
  }
};

export { signup };
