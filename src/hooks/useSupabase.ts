import { supabase } from "../supabase/config";
import { Form } from "../typescript/types";

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

	return { addToDatabase };
};

export default useSupabase;
