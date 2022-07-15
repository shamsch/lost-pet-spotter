import { Pressable } from "react-native";
import { Post } from "../typescript/types";

interface PostItemProps {
	post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
	return <Pressable></Pressable>;
};

export default PostItem;
