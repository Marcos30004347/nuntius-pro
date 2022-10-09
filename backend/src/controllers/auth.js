

const createAccount = async (request, response) => {
    try {
      const data = request.body;

			const resp = await authService.createAccount(data);
			
			return response.json(resp);
	
    } catch (e) {
      console.error(e);

			return response.status(404).json(e);
    }
}
