
export const getStaticMapUrl = (latitude: number, longitude: number) => {
	const url = `https://static-maps.yandex.ru/1.x/?lang=en-US&ll=${longitude},${latitude}&z=12&l=map&size=600,300&pt=${longitude},${latitude},flag`;
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