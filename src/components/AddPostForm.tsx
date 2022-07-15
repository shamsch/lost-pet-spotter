import { useRoute } from "@react-navigation/native";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FormInitialValue, PostType } from "../typescript/types";
import { Colors } from "../utils/constant";
import useStore from "../zustand/store";
import { ImagePicker } from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import IconButton from "./UI/IconButton";
import PostTypeChip from "./UI/PostTypeChip";
import ReusableButton from "./UI/ReusableButton";
import Separator from "./UI/Separator";
interface AddPostFormProps {}

interface IParams {
	latitude: string | undefined;
	longitude: string | undefined;
}
const AddPostForm = ({}: AddPostFormProps) => {
	const {
		title,
		setTitle,
		body,
		setBody,
		latitude,
		setLatitude,
		longitude,
		setLongitude,
		image,
		setImage,
		type,
		setType,
	} = useStore();

	const handleSubmit = () => {
		console.log("values", { title, body, latitude, longitude, image, type });
	};

	return (
		<ScrollView style={styles.container}>
			<>
				<TextInput
					value={title}
					onChangeText={(text) => setTitle(text)}
					placeholder="Add a concise title"
					style={styles.input}
				/>

				<TextInput
					value={body}
					onChangeText={(text) => setBody(text)}
					placeholder="Add some helpful description"
					style={[styles.input, styles.multilineInput]}
					multiline={true}
				/>

				<View style={styles.chipStyle}>
					<PostTypeChip
						type="Spotting"
						onPress={() => setType(PostType.Spotting)}
						isSelected={type === PostType.Spotting}
					/>
					<PostTypeChip
						type="Lost"
						onPress={() => setType(PostType.Lost)}
						isSelected={type === PostType.Lost}
					/>
				</View>

				<ImagePicker onImagePicked={(value) => setImage(value)} />

				<LocationPicker
					latitude={latitude}
					longitude={longitude}
					onLocationPicked={(location) => {
						setLatitude(Number(location.lat));
						setLongitude(Number(location.lng));
					}}
				/>

				<ReusableButton
					text="Submit"
					onPress={() => {
						handleSubmit();
					}}
					backgroundColor={Colors.secondaryDark}
					textColor={Colors.white}
					borderColor={Colors.blackLight}
					children={
						<IconButton icon="send" size={24} color="white"></IconButton>
					}
				/>

				<Separator />
			</>
		</ScrollView>
	);
};

export default AddPostForm;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.secondaryLight,
		padding: 10,
	},
	input: {
		borderWidth: 1,
		borderColor: Colors.gray,
		backgroundColor: Colors.white,
		padding: 10,
		margin: 5,
		width: "98%",
	},
	multilineInput: {
		height: 100,
		width: "98%",
		textAlignVertical: "top",
	},
	errorText: {
		color: Colors.error,
		fontSize: 14,
		marginBottom: 5,
	},
	chipStyle: {
		flexDirection: "row",
		justifyContent: "flex-start",
		margin: 5,
	},
});
