import React from "react";
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
	launchImageLibraryAsync,
	useMediaLibraryPermissions,
	MediaTypeOptions,
} from "expo-image-picker";
import { Alert, Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/constant";
import ReusableButton from "./UI/ReusableButton";
import IconButton from "./UI/IconButton";
import useFormStore from "../zustand/store";

export const ImagePicker = () => {
	const { image, setImage } = useFormStore();
	const [cameraPermissionInformation, requestPermission] =
		useCameraPermissions();
	const [libraryPermissionInformation, requestLibraryPermission] =
		useMediaLibraryPermissions();

	const checkCameraPermission = async (type: string) => {
		switch (type) {
			case "camera":
				if (
					cameraPermissionInformation &&
					cameraPermissionInformation.status !== PermissionStatus.UNDETERMINED
				) {
					const permission = await requestPermission();
					return permission.granted;
				}
				if (
					cameraPermissionInformation &&
					cameraPermissionInformation.status === PermissionStatus.DENIED
				) {
					Alert.alert(
						"Insufficent permission",
						"You need to enable library permissions to use this app"
					);
					return false;
				}
				return true;
			case "library":
				if (
					libraryPermissionInformation &&
					libraryPermissionInformation.status !== PermissionStatus.UNDETERMINED
				) {
					const permission = await requestLibraryPermission();
					return permission.granted;
				}
				if (
					libraryPermissionInformation &&
					libraryPermissionInformation.status === PermissionStatus.DENIED
				) {
					Alert.alert(
						"Insufficent permission",
						"You need to enable library permissions to use this app"
					);
					return false;
				}
				return true;
			default:
				return false;
		}
	};

	const handleGallery = async () => {
		const hasPermission = await checkCameraPermission("library");
		if (hasPermission) {
			const image = await launchImageLibraryAsync({
				mediaTypes: MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [16, 9],
				quality: 1,
			});
			if (image.cancelled) {
				return;
			}
			setImage(image.uri);
		}
		return null;
	};

	const handleCamera = async () => {
		const hasPermission = await checkCameraPermission("camera");
		if (hasPermission) {
			const image = await launchCameraAsync({
				allowsEditing: true,
				aspect: [16, 9],
				quality: 0.5,
			});
			if (!image.cancelled) {
				setImage(image.uri);
			}
		}
		return null;
	};

	const imageView = image ? (
		<Image source={{ uri: image }} style={{ width: "100%", height: 190 }} />
	) : (
		<Text style={styles.previewText}>No image taken or chosen</Text>
	);

	return (
		<>
			<View style={styles.imageView}>{imageView}</View>
			<View style={styles.buttonView}>
				<View style={styles.button}>
					<ReusableButton
						text="Take a photo"
						onPress={handleCamera}
						backgroundColor={Colors.secondary}
						textColor={Colors.white}
						borderColor={Colors.secondaryDark}
						children={
							<IconButton icon="camera" size={24} color="white"></IconButton>
						}
					/>
				</View>

				<View style={styles.button}>
					<ReusableButton
						text="Open gallery"
						onPress={handleGallery}
						backgroundColor={Colors.secondary}
						textColor={Colors.white}
						borderColor={Colors.secondaryDark}
						children={
							<IconButton icon="images" size={24} color="white"></IconButton>
						}
					/>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	imageView: {
		width: "98%",
		height: 200,
		margin: 5,
		padding: 5,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 3,
		borderColor: Colors.gray,
		backgroundColor: Colors.white,
	},
	previewText: {
		fontSize: 20,
		fontWeight: "bold",
		color: Colors.gray,
	},
	buttonView: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
	button: {
		width: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
});
