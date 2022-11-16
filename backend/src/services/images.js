import { getDBClient } from "../database/init.js";
import { decode } from 'base64-arraybuffer'

const uploadImage = async (name, content) => {
	try {
		const supabase = getDBClient();

		let storage = supabase.storage.from("nuntius-profile-images");
		
		const filename = "public/" + name + ".png"

		await storage.remove([ filename ]);

		const { data, error } = await storage.upload(filename, decode(content), {contentType: "image/png"});

		if (error) throw error;
		
		const { publicURL } = storage.getPublicUrl(filename)

		return {
			image_url: publicURL,
		};
	} catch(e) {
		console.log(e);
		throw new Error(`Error: error uploading image "${e}"`);
	}
}

export { uploadImage };
