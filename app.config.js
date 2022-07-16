import "dotenv/config";

export default {
	expo: {
		name: "lost-pet-spotter",
		slug: "lost-pet-spotter",
		extra: {
			API_KEY: process.env.GOOGLE_API_KEY,
			SUPABASE_API: process.env.SUPABASE_API,
			SUPABASE_KEY: process.env.SUPABASE_KEY,
		},
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		updates: {
			fallbackToCacheTimeout: 0,
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#FFFFFF",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		plugins: [
			[
				"expo-image-picker",
				{
					photosPermission:
						"The app accesses your photos to let you share them with your friends.",
				},
			],
		],
	},
};
