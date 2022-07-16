import create from "zustand";
import { PostType } from "../typescript/types";
import { DEFAULT_LOCATION } from "../utils/constant";

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
	latitude: DEFAULT_LOCATION.latitude,
	setLatitude: (latitude: number) => set(() => ({ latitude })),
	longitude: DEFAULT_LOCATION.longitude,
	setLongitude: (longitude: number) => set(() => ({ longitude })),
	image: "",
	setImage: (image: string) => set(() => ({ image })),
	type: PostType.Spotting,
	setType: (type: PostType) => set(() => ({ type })),
	setAllToDefault: () =>
		set(() => ({
			title: "",
			body: "",
			latitude: DEFAULT_LOCATION.latitude,
			longitude: DEFAULT_LOCATION.longitude,
			image: "",
			type: PostType.Spotting,
		})),
}));

export default useFormStore;
