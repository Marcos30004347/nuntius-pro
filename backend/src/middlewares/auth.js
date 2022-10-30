import { getDBClient } from "../database/init.js";

const authCheckerMiddleware = async (request, response, next) => {
  try {
    const supabase = getDBClient()
    const { access_token, data } = request.body;
    const { user, error } = await supabase.auth.api.getUser(access_token);

    if (error) throw error;
    request.body.user = user;

    console.log(data)
    next();
  } catch (e) {
    console.log(e);
    return response.status(400).json(`Invalid access token`);
  }
}

export { authCheckerMiddleware };