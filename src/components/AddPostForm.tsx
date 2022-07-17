import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import useSupabase from "../hooks/useSupabase";
import { Form, FormValidatorReturn, PostType } from "../typescript/types";
import { Colors } from "../utils/constant";
import { formValidator } from "../utils/formValidator";
import useFormStore from "../zustand/store";
import { ImagePicker } from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import IconButton from "./UI/IconButton";
import PostTypeChip from "./UI/PostTypeChip";
import ReusableButton from "./UI/ReusableButton";
import Separator from "./UI/Separator";
interface AddPostFormProps {}

const AddPostForm = ({}: AddPostFormProps) => {
	const {
		title,
		setTitle,
		body,
		setBody,
		latitude,
		longitude,
		image,
		type,
		setType,
		setAllToDefault,
	} = useFormStore();

	const [errors, setErrors] = useState<FormValidatorReturn | undefined>();

	const { addToDatabase, uploadImage } = useSupabase();

	const handleSubmit = async () => {
		const formValues: Form = {
			title,
			body,
			latitude,
			longitude,
			image,
			type,
		};
		setErrors(formValidator(formValues));
		if (!errors?.body && !errors?.title && !errors?.location) {
			setAllToDefault();
			let result; 
			if(image){
				const res = await uploadImage(image);
				console.log(res)
				const formValuesWithImageLink: Form = {
					...formValues,
					image: res!=="N/A" && res.publicURL? res.publicURL : "N/A",
				};
				result = await addToDatabase(formValuesWithImageLink);
			}
			else{
				result = await addToDatabase({...formValues, image: "N/A"});
			}
			console.log(result);
		}
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

				{errors?.title && <Text style={styles.errorText}>{errors.title}</Text>}

				<TextInput
					value={body}
					onChangeText={(text) => setBody(text)}
					placeholder="Add some helpful description"
					style={[styles.input, styles.multilineInput]}
					multiline={true}
				/>

				{errors?.body && <Text style={styles.errorText}>{errors.body}</Text>}

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

				<ImagePicker />

				<LocationPicker />

				{errors?.location && (
					<Text style={styles.errorText}>{errors?.location}</Text>
				)}

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
