import { getDBClient } from "../database/init.js";

const deleteImage = async (name) => {
	try {
		const supabase = getDBClient();
		
		let storage = supabase.storage.from("nuntius-profile-images");

		const { error } = await storage.remove([ "public/" + name ]);

		if(error) throw error;

		return { status: "Ok" };
	} catch(e) {
    throw new Error(`Error: error deleting image "${e}"`);
	}
}

const uploadImage = async (name, content) => {
	try {
		const supabase = getDBClient();

		let storage = supabase.storage.from("nuntius-profile-images");

		const { data, error } = await storage.upload("public/" + name, content);

    if (error) throw error;

		// let public_url = "https://myytbdnfodsigyixqujf.supabase.co/storage/v1/object/public/nuntius-profile-images/public" + name;
		
		return {
      image_url: data.url,
    };
	
	} catch(e) {
    throw new Error(`Error: error uploading image "${e}"`);
	}
}

export { uploadImage, deleteImage };
