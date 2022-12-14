import { signup, signin } from "../services/auth.js";

const signupHandler = async (request, response) => {
  try {
    const { email, username, password } = request.body;
    let image_base64 = request.body.image_base64;
    if (!image_base64) {
      image_base64 = "default";
    }

    const resp = await signup(email, username, password, image_base64);

    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const signinHandler = async (request, response) => {
  try {
    const { email, password } = request.body;
    const resp = await signin(email, password);
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { signupHandler, signinHandler };
