import create from "zustand";
import { PostType } from "../typescript/types";

interface FormState {
	title: string;
	setTitle: (title: string) => void;
	body: string;
	setBody: (body: string) => void;
	latitude: number;
	setLatitude: (latitude: number) => void;
	longitude: number;
	setLongitude: (longitude: number) => void;
	image: string;
	setImage: (image: string) => void;
	type: PostType;
	setType: (type: PostType) => void;
	setAllToDefault: () => void;
}

const useFormStore = create<FormState>((set) => ({
	title: "",
	setTitle: (title: string) => set(() => ({ title })),
	body: "",
	setBody: (body: string) => set(() => ({ body })),
	latitude: 61.4978,
	setLatitude: (latitude: number) => set(() => ({ latitude })),
	longitude: 23.761,
	setLongitude: (longitude: number) => set(() => ({ longitude })),
	image: "",
	setImage: (image: string) => set(() => ({ image })),
	type: PostType.Spotting,
	setType: (type: PostType) => set(() => ({ type })),
	setAllToDefault: () =>
		set(() => ({
			title: "",
			body: "",
			latitude: 61.4978,
			longitude: 23.761,
			image: "",
			type: PostType.Spotting,
		})),
}));

export default useFormStore;
