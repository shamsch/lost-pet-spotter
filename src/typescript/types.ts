export interface Post{
    title: string;
    body: string;
    lat: number;
    lng: number;
    imgUrl: string;
    userId: string;
    postId: string;
    type: "SPOTTED" | "LOST" | "FOUND";
    timeStamp?: string;
    email?: string;
    phone?: string;
}

export interface MapData{
    lat: Post['lat'];
    lng: Post['lng'];
}
