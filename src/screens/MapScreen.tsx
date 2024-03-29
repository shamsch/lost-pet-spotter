import React, { useLayoutEffect } from "react";
import Map from "../components/Map";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../typescript/types";
import IconButton from "../components/UI/IconButton";
import useFormStore from "../zustand/store";

type MapScreenProps = NativeStackScreenProps<RootStackParamList, "MapView">;

const MapScreen = ({ navigation }: MapScreenProps) => {
	const { latitude, longitude, setLatitude, setLongitude } = useFormStore();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton
					icon="save"
					size={24}
					color={tintColor}
					onPress={() => {
						navigation.navigate("AddPost");
					}}
				/>
			),
		});
	}, [navigation]);

	return (
		<>
			<Map
				latitude={latitude}
				longitude={longitude}
				setLatitude={setLatitude}
				setLongitude={setLongitude}
			/>
		</>
	);
};

export default MapScreen;
