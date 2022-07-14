import { useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";
import { FormInitialValue, PostType } from "../typescript/types";
import { Colors } from "../utils/constant";
import { ImagePicker } from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import IconButton from "./UI/IconButton";
import PostTypeChip from "./UI/PostTypeChip";
import ReusableButton from "./UI/ReusableButton";
import Separator from "./UI/Separator";
interface AddPostFormProps {

}

const validationSchema = Yup.object().shape({
	title: Yup.string().required("Please enter a title"),
	body: Yup.string().required("Please enter a description"),
});

interface IParams {
	latitude: string | undefined;
	longitude: string | undefined;
}
const AddPostForm = ({ }: AddPostFormProps) => {
	const params = useRoute().params as IParams;

	const handleSubmit = (values: any) => {
		console.log(values);
	};

	const initialValues: FormInitialValue = {
		title: "",
		body: "",
		type: PostType.Spotting,
		imgUrl: "",
		lat: "61.4978", //defaults to Tampere, Finland
		lng: "23.7610",
	}

	return (
		<ScrollView style={styles.container}>
			<Formik
				initialValues={initialValues}
				onSubmit={(values, actions) => {
					actions.resetForm();
					handleSubmit(values);
				}}
				validationSchema={validationSchema}
			>
				{({
					handleChange,
					handleBlur,
					handleSubmit,
					setFieldValue,
					values,
					errors,
					touched,
				}) => (
					<>
						<TextInput
							value={values.title}
							onChangeText={handleChange("title")}
							onBlur={handleBlur("title")}
							placeholder="Add a concise title"
							style={styles.input}
						/>
						{touched.title && errors.title && (
							<Text style={styles.errorText}>{errors.title}</Text>
						)}

						<TextInput
							value={values.body}
							onChangeText={handleChange("body")}
							onBlur={handleBlur("body")}
							placeholder="Add some helpful description"
							style={[styles.input, styles.multilineInput]}
							multiline={true}
						/>
						{touched.body && errors.body && (
							<Text style={styles.errorText}>{errors.body}</Text>
						)}

						<View style={styles.chipStyle}>
							<PostTypeChip
								type="Spotting"
								onPress={() =>
									handleChange("type")("Spotting")

								}
								isSelected={values.type === "Spotting"}
							/>
							<PostTypeChip
								type="Lost"
								onPress={() =>
									handleChange("type")("Lost")
								}
								isSelected={values.type === "Lost"}
							/>
						</View>

						<ImagePicker
							onImagePicked={(value) => handleChange("imgUrl")(value)}
						/>


						{
							params?.latitude && values.lat !== params.latitude && setFieldValue("lat", params.latitude)
						}

						{
							params?.longitude && values.lng !== params.longitude && setFieldValue("lng", params.longitude)
						}


						<LocationPicker
							latitude={Number(values.lat)}
							longitude={Number(values.lng)}
							onLocationPicked={(location) => {
								setFieldValue("lat", location.lat?.toString());
								setFieldValue("lng", location.lng?.toString());
							}
							} />

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
				)}
			</Formik>
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
