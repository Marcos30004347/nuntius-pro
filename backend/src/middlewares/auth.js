import { getDBClient } from "../database/init.js";
import { unauthenticatedRoutes} from "../routes.js"


const authCheckerMiddleware = async (request, response, next) => {
  try {
    const url = request.baseUrl + request.path;
    if(url in unauthenticatedRoutes){
      next();
      return;
    }

    const supabase = getDBClient();
    const accessToken = request.headers.authorization;
    const { user, error } = await supabase.auth.api.getUser(accessToken);

    if (error) throw error;
    request.body.user = user;

    next();
  } catch (e) {
    console.error(e);
    return response.status(400).json(`Invalid access token`);
  }
}

export { authCheckerMiddleware };