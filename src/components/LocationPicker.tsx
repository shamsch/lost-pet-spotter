import { View, Alert, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
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
}

const LocationPicker = ({onLocationPicked}:LocationPickerProps) => {
    const [location, setLocation] = useState<MapData | null>(null);
    const [permissionStatus, requestPermission] = useForegroundPermissions();
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

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
            setLocation({ lat: String(latitude), lng: String(longitude) });
            onLocationPicked({ lat: String(latitude), lng: String(longitude) });
        } else {
            Alert.alert(
                "Insufficient Permissions!",
                "You need to grant location permissions to use this app."
            );
        }
    };

    const toSetLocationStack = () => {
        navigation.navigate("MapView");
    }

    const mapUri = location?.lat && location?.lng ? getStaticMapUrl(location.lat, location.lng) : getStaticMapUrl("61.4978", "23.7610"); //defaults to Tampere, Finland

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
                text="Get your Location"
                textColor="white"
                backgroundColor= {Colors.secondary}
                borderColor={Colors.secondaryDark}
                children={<IconButton icon="map" size={24} color="white"/>}
                onPress={getLocation}
              />
              <ReusableButton
                text="Set your Location"
                textColor="white"
                backgroundColor= {Colors.secondary}
                borderColor={Colors.secondaryDark}
                children={<IconButton icon="navigate-circle-outline" size={24} color="white"/>}
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
    buttonView:{
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 10,
    }
});