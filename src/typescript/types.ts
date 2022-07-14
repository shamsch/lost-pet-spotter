export interface Post{
    title: string;
    body: string;
    lat?: string;
    lng?: string;
    imgUrl?: string;
    userId: string;
    postId: string;
    type: PostType;
    timeStamp?: string;
    email?: string;
    phone?: string;
}

export enum PostType{
    Spotting = "Spotting",
    Lost = "Lost",
    Found = "Found"
}

export interface MapData{
    lat: Post['lat'];
    lng: Post['lng'];
}

export interface FormInitialValue{
    title: string;
    body: string;
    lat: string, 
    lng: string,
    imgUrl: string;
    type: PostType;
}

export type RootStackParamList = {
    AllPost: undefined;
    PostDetail: undefined;
    AddPost: {latitude: string | undefined, longitude: string| undefined};
    SignUp: undefined;
    LogIn: undefined;
    MapView: {latitude?: string, longitude?: string};
}