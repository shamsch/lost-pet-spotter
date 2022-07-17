export interface Post {
	title: string;
	body: string;
	lat: number;
	lng: number;
	imgUrl: string;
	type: PostType;
	id: string;
	createdAt: string;
	city: string;
}
export interface Form{
	title: string;
	body: string;
	latitude: number;
	longitude: number;
	type: PostType;
	image?: string;
	city?: string;
}

export type FormValidatorReturn = {
    title?: string;
	body?: string;
	location?: string;
};

export enum PostType {
	Spotting = "Spotting",
	Lost = "Lost",
	Found = "Found",
}

export interface MapData {
	lat: Post["lat"];
	lng: Post["lng"];
}

export type RootStackParamList = {
	AllPost: undefined;
	AddPost: undefined;
	SignUp: undefined;
	LogIn: undefined;
	MapView: undefined;
	PostView: {post: Post};
};

