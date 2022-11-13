import { getDBClient } from "../database/init.js";
import { unauthenticatedRoutes} from "../routes.js"


const authCheckerMiddleware = async (request, response, next) => {
  try {
    const url = request.baseUrl + request.path;
    if(url in unauthenticatedRoutes){
      next();
      return;
    }

    const supabase = getDBClient()
    const { access_token, data } = request.body;
    const { user, error } = await supabase.auth.api.getUser(access_token);

    if (error) throw error;
    request.body.user = user;

    next();
  } catch (e) {
    console.error(e);
    return response.status(400).json(`Invalid access token`);
  }
}

export { authCheckerMiddleware };