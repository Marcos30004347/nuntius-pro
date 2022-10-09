import { signup } from "../services/auth.js";

const createAccount = async (request, response) => {
  try {
    const { email, username, password } = request.body;
    const resp = await signup(email, username, password);
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { createAccount };
