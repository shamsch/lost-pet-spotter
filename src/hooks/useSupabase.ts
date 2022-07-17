import { supabase } from "../supabase/config";
import { Form } from "../typescript/types";
import { v4 as uuidv4 } from 'uuid';

const useSupabase = () => {
	const addToDatabase = async (formValue: Form) => {
		const { data, error } = await supabase.from("post").insert([
			{
				title: formValue.title,
				body: formValue.body,
				lat: formValue.latitude,
				lng: formValue.longitude,
				type: formValue.type,
				imageUrl: formValue.image,
			},
		]);
		if (error) {
			console.log(error);
		}
		return data;
	};

	const uploadImage = async (uri: string) => {
		const fileData = new FormData();
		
		fileData.append("photo", {
			uri,
			name: "photo.jpg",
			type: "image/jpg",
		} as any);

		const {data, error} = await supabase.storage.from("lost-pet-spotter").upload(`/photos/${uuidv4()}.png`, fileData);

		if (error) {
			console.log(error);
		}
		if (data){
			const imageUrl = await supabase.storage.from("lost-pet-spotter").getPublicUrl(data.Key);
			return imageUrl;
		}
		return "N/A";
	}

	return { addToDatabase, uploadImage };
};

export default useSupabase;
