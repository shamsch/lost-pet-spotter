export interface Post{
    title: string;
    body: string;
    lat: number;
    lng: number;
    imgUrl: string;
    userId: string;
    postId: string;
}

export interface MapData{
    lat: number;
    lng: number;
}