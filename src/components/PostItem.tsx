import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { Post, PostType } from "../typescript/types";
import { Card, Avatar, Chip } from "react-native-paper";
import { Colors, DEFAULT_IMAGE } from "../utils/constant";
import { useRef } from "react";
import { format } from 'timeago.js'

interface PostItemProps {
	post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
	const colorRef = useRef<string>(Colors.tertiary)

	if (post.type === PostType.Lost) {
		colorRef.current = Colors.primary
	} else if (post.type === PostType.Found) {
		colorRef.current = Colors.secondary
	}

	const handlePress = () => {
		console.log(post.id)
	}

	
	return (
			<Pressable onPress={handlePress} style={()=> [styles.container]}>
				<Card>
					<Card.Title
						title={post.title}
						subtitle={format(post.createdAt)}
						titleNumberOfLines={4}
						left={(props) => (
							<Avatar.Icon
								{...props}
								icon={post.title.toLowerCase().includes("dog") ? "dog" : post.title.toLowerCase().includes("cat") ? "cat" : "paw"}
								color="white"
								style={{ backgroundColor: colorRef.current }}
							/>
						)}
					/>

					<Card.Content>
						<View style={{
							flexDirection: "row",
							marginBottom: 5,
						}}>
						<Chip
							icon="tag"
							style={{
								backgroundColor: colorRef.current,
								width: "30%",
								margin: 5
							}}
						>
							{post.type}
						</Chip>
						<Chip
							icon="map-marker"
							style={{
								backgroundColor: Colors.gray,
								width: "35%",
								margin: 5,
							}}
						>
							{post.city}
						</Chip>
						</View>
					</Card.Content>
					<Card.Cover source={{ uri: post.imgUrl !== "N/A" ? post.imgUrl : DEFAULT_IMAGE }} />
				</Card>
			</Pressable>
	);
};

export default PostItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 10,
	}
});

