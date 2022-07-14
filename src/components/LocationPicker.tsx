import { View, Alert, Image, StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { MapData, RootStackParamList } from "../typescript/types";
import {
    useForegroundPermissions,
    PermissionStatus,
    getCurrentPositionAsync,
    LocationAccuracy,
} from "expo-location";
import { getStaticMapUrl } from "../utils/googleMapStatic";
import ReusableButton from "./UI/ReusableButton";
import { Colors } from "../utils/constant";
import IconButton from "./UI/IconButton";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';

interface LocationPickerProps {
    onLocationPicked: (location: MapData) => void;
    latitude: number;
    longitude: number;
}

interface locationState {
    latitude: number;
    longitude: number;
}

const LocationPicker = ({ onLocationPicked, latitude, longitude }: LocationPickerProps) => {
    const [permissionStatus, requestPermission] = useForegroundPermissions();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [location, setLocation] = useState<null | locationState>(null);

    const getLocationPermission = async () => {
        if (permissionStatus?.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if (permissionStatus?.status === PermissionStatus.DENIED) {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant location permissions to use this app."
            );
            return false;
        }

        return true;
    };

    const getLocation = async () => {
        const permissionGranted = await getLocationPermission();

        if (permissionGranted) {
            const location = await getCurrentPositionAsync({
                accuracy: LocationAccuracy.High,
            });
            const { latitude, longitude } = location.coords;
            onLocationPicked({ lat: String(latitude), lng: String(longitude) });
            setLocation({ latitude, longitude });
        } else {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant location permissions to use this app."
            );
        }
    };

    const toSetLocationStack = () => {
        navigation.navigate("MapView", { latitude: String(latitude), longitude: String(longitude) });
    }

    useEffect(() => {
        setLocation({ latitude, longitude });
    }
        , [latitude, longitude]);

    const mapUri = getStaticMapUrl(String(location?.latitude), String(location?.longitude));

    return (
        <View>
            <View style={styles.mapView}>
                <Image
                    source={{ uri: mapUri }}
                    style={{ width: "100%", height: 200 }}
                />
            </View>
            <View style={styles.buttonView}>
                <ReusableButton
                    text="Get Location"
                    textColor="white"
                    backgroundColor={Colors.secondary}
                    borderColor={Colors.secondaryDark}
                    children={<IconButton icon="map" size={24} color="white" />}
                    onPress={getLocation}
                />
                <ReusableButton
                    text="Set Location"
                    textColor="white"
                    backgroundColor={Colors.secondary}
                    borderColor={Colors.secondaryDark}
                    children={<IconButton icon="navigate-circle-outline" size={24} color="white" />}
                    onPress={toSetLocationStack}
                />
            </View>
        </View>
    );
};

export default LocationPicker;


const styles = StyleSheet.create({
    mapView: {
        marginTop: 10,
        width: "100%",
        height: 200,
    },
    buttonView: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    }
});