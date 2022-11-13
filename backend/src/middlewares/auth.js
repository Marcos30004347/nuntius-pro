import { getDBClient } from "../database/init.js";
import { unauthenticatedRoutes} from "../routes.js"


const authCheckerMiddleware = async (request, response, next) => {
  try {
    const url = request.baseUrl + request.path;
    if(url in unauthenticatedRoutes){
      console.log("PASSING");
      next();
      return;
    }

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