import React, { useState } from "react";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { Alert, Button, Image, View, Text, StyleSheet } from "react-native";
import { Colors } from "../utils/constant";
import ReusableButton from "./UI/ReusableButton";

export const ImagePicker = () => {
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState<null | string>(null);

    const checkCameraPermission = async () => {
        if (cameraPermissionInformation && cameraPermissionInformation.status !== PermissionStatus.UNDETERMINED) {
            const permission = await requestPermission();
            return permission.granted;
        }
        if (cameraPermissionInformation && cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert("You need to enable camera permissions to use this app");
            return false;
        }
        return true;
    }

    const handleCamera = async () => {
        if (await checkCameraPermission()) {
            const image = await launchCameraAsync({
                allowsEditing: false,
                aspect: [16, 9],
                quality: 0.5,
            });
            setImage(image.cancelled ? null : image.uri);
        }

    }

    const imageView = image ? <Image source={{ uri: image }} style={{ width: "100%", height: 190 }} /> : <Text style={styles.previewText}>No image taken</Text>;

    return (
        <>
            <View style={styles.imageView}>
                {imageView}
            </View>
            <ReusableButton
                text="Take a photo"
                onPress={handleCamera}
                backgroundColor={Colors.secondary}
                textColor={Colors.white}
                borderColor={Colors.secondaryDark}
            />
        </>
    )
}

const styles = StyleSheet.create({
    imageView: {
        width: "100%",
        height: 200,
        margin: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 3,
        borderColor: Colors.gray,
        backgroundColor: Colors.white
    },
    previewText: {
        fontSize: 20,
        fontWeight: "bold",
        color: Colors.gray
    }

}
)

