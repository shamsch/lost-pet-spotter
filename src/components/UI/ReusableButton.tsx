import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

interface ReusableButtonProps {
	onPress: () => void;
	text: string;
	backgroundColor: string;
	textColor: string;
	borderColor: string;
	children?: JSX.Element;
}

const ReusableButton = ({
	text,
	onPress,
	backgroundColor,
	textColor,
	borderColor,
	children,
}: ReusableButtonProps) => {
	const style = styles({ backgroundColor, borderColor, textColor });
	return (
		<Pressable onPress={onPress}>
			<View style={style.button}>
				{children}
				<Text style={style.text}>{text}</Text>
			</View>
		</Pressable>
	);
};

export default ReusableButton;

interface Style {
	backgroundColor: string;
	borderColor: string;
	textColor: string;
}

const styles = ({ backgroundColor, borderColor, textColor }: Style) =>
	StyleSheet.create({
		button: {
			backgroundColor: backgroundColor,
			padding: 10,
			margin: 10,
			borderRadius: 5,
			borderWidth: 2,
			borderColor: borderColor,
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "row",
		},
		text: {
			color: textColor,
			fontSize: 15,
			textAlign: "center",
		},
	});
