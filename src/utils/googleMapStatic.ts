import Constants from "expo-constants";

const API_KEY = Constants.manifest?.extra?.API_KEY;

export const getStaticMapUrl = (latitude: number, longitude: number) => {
    const url = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=400x220&maptype=roadmap
    &markers=color:red%7Clabel:C%7C${latitude},${longitude}&key=${API_KEY}`;
    return url;
};
