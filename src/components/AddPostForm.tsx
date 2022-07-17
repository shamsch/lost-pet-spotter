import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";
import useSupabase from "../hooks/useSupabase";
import { Form, FormValidatorReturn, PostType, RootStackParamList } from "../typescript/types";
import { Colors } from "../utils/constant";
import { formValidator } from "../utils/formValidator";
import { getReadableLocation } from "../utils/googleMapStatic";
import useFormStore from "../zustand/store";
import { ImagePicker } from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import PostTypeChip from "./UI/PostTypeChip";
import ReusableButton from "./UI/ReusableButton";
import Separator from "./UI/Separator";

interface AddPostFormProps {}

const AddPostForm = ({}: AddPostFormProps) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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

	const [errors, setErrors] = useState<FormValidatorReturn>(
		{
			title: "",
			body: "",
			location: "",
		}
	);

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
		const formErrors = formValidator(formValues);
		
		// store the errors in the state so as to show the error warnings in the form
		setErrors(formErrors);

		// if there is no error, then send back to backend
		if (formErrors.title === "" && formErrors.body === "" && formErrors.location === "") {
			// also reset the form to default
			setAllToDefault();

			if(image){
				const res = await uploadImage(image);
				const city = await getReadableLocation(latitude, longitude);
				console.log(city)
				console.log(res)
				const formValuesWithImageLink: Form = {
					...formValues,
					image: res!=="N/A" && res.publicURL? res.publicURL : "N/A",
					city,
				};
				await addToDatabase(formValuesWithImageLink);
			}
			else{
				await addToDatabase({...formValues, image: "N/A"});
			}

			// navigate to the home screen
			navigation.navigate("AllPost");
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

				{errors.title!=="" && <Text style={styles.errorText}>{errors.title}</Text>}

				<TextInput
					value={body}
					onChangeText={(text) => setBody(text)}
					placeholder="Please add your contact info in description for communication"
					style={[styles.input, styles.multilineInput]}
					multiline={true}
				/>

				{errors.body!=="" && <Text style={styles.errorText}>{errors.body}</Text>}

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

				{errors!=="" && (
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
						<Avatar.Icon
							size={25}
							icon="check"
							color={Colors.white}
							style={{ marginRight: 15, backgroundColor: Colors.secondaryDark }}
						/>
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
		padding: 10,
		backgroundColor: Colors.defaultWhite,
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
