import { supabase } from "../supabase/config";
import { Form, Post } from "../typescript/types";
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
				imgUrl: formValue.image,
				city: formValue.city,
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

		const id = uuidv4();

		const {data, error} = await supabase.storage.from("lost-pet-spotter").upload(`/photos/${id}.png`, fileData);

		if (error) {
			console.log(error);
		}
		if (data){
			const imageUrl = await supabase.storage.from("lost-pet-spotter").getPublicUrl(`photos/${id}.png`);
			return imageUrl;
		}
		return "N/A";
	}

	const getPosts = async (numberOfPost: number, ascending: boolean) => {
		const { data, error } = await supabase.from("post").select().order("created_at", {ascending}).limit(numberOfPost);
		if (error) {
			console.log(error);
		}
		return data as Post[];
	}

	const getPostByCity = async (city: string) => {
		const { data, error } = await supabase.from("post").select().order("created_at").textSearch("city", city);
		if (error) {
			console.log(error);
		}
		return data as Post[];
	}


	return { addToDatabase, uploadImage, getPosts, getPostByCity};
};

export default useSupabase;
