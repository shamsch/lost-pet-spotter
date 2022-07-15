import { useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker, MapEvent, Region } from "react-native-maps";
import { MapData } from "../typescript/types";

interface MapProps {
	latitude: number;
	longitude: number;
	setLatitude: (latitude: number) => void;
	setLongitude: (longitude: number) => void;
}

const Map = ({ latitude, longitude, setLatitude, setLongitude }: MapProps) => {
	const region: Region = {
		latitude: latitude, //defaults to Tampere, Finland
		longitude: longitude,
		latitudeDelta: 0.0922, // zoom level, this works
		longitudeDelta: 0.0421,
	};

	const handleMapPress = (e: MapEvent) => {
		setLatitude(e.nativeEvent.coordinate.latitude);
		setLongitude(e.nativeEvent.coordinate.longitude);
	};

	return (
		<>
			<MapView
				style={{ flex: 1 }}
				initialRegion={region}
				onPress={handleMapPress}
			>
				<Marker
					title="Selected Location"
					coordinate={{
						latitude: latitude,
						longitude: longitude,
					}}
				/>
			</MapView>
		</>
	);
};

export default Map;
