import Constants from "expo-constants";
import { LongPressGestureHandler } from "react-native-gesture-handler";

const API_KEY = Constants.manifest?.extra?.API_KEY;

export const getStaticMapUrl = (latitude: number, longitude: number) => {
	const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x220&maptype=roadmap
    &markers=color:red%7Clabel:C%7C${latitude},${longitude}&key=${API_KEY}`;
	return url;
};

export const getReadableLocation = async (lat: number, lng: number): Promise<string> => {
	const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`)
	const data = await response.json()
	if(data.address.city){
		return data.address.city as string
	}
	else if(data.address.town){
		return data.address.town as string
	}
	else if(data.address.village){
		return data.address.village as string
	}
	else if(data.address.country){
		return data.address.country as string
	}
	else{
		return "Planet Earth" 
	}
}