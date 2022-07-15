import { StyleSheet, Text, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Colors } from "../../utils/constant";

interface ReusablePickerProps {
	text: string;
	options: string[];
	selected: string;
	onChange: (value: string) => void;
}

const ReusablePicker = ({
	options,
	selected,
	onChange,
	text,
}: ReusablePickerProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.text}>{text}</Text>
			</View>
			<View style={styles.pickerContainer}>
				<Picker
					selectedValue={selected}
					onValueChange={(itemValue) => onChange(itemValue)}
					placeholder="Select a value"
				>
					{options.map((option, index) => {
						return (
							<Picker.Item
								style={styles.pickerItem}
								label={option}
								value={option}
								key={index}
							/>
						);
					})}
				</Picker>
			</View>
		</View>
	);
};

export default ReusablePicker;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	textContainer: {
		flexGrow: 0.5,
		margin: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		fontFamily: "Roboto",
		fontWeight: "bold",
		margin: 1,
		color: Colors.black,
	},
	pickerContainer: {
		justifyContent: "center",
		marginRight: 7,
		borderColor: Colors.black,
		borderWidth: 1,
		flexGrow: 4,
		borderRadius: 5,
		height: 50,
		backgroundColor: Colors.white,
	},
	pickerItem: {
		fontSize: 20,
		color: Colors.black,
	},
});
