
const editProfileHandler = async (request, response) => {
  try {
    const { username, about } = request.body;

    const resp = await editProfile(email, password);
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

const getUserByIdHandler = async (request, response) => {
  try {
    const { userId } = request.body.data;
    const resp = await getUserById(userId);
    return response.json(resp);
  } catch (e) {
    console.error(e);
    return response.status(400).json(e);
  }
};

export { editProfileHandler, getUserByIdHandler };