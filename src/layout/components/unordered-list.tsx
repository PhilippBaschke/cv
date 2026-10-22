import { StyleSheet, View } from "@react-pdf/renderer";
import { space } from "../tokens.js";
import { Text } from "./text.js";

const styles = StyleSheet.create({
	bulletPoint: { marginLeft: space[2], marginRight: space[1] },
	item: { display: "flex", flexDirection: "row" },
	text: { flex: 1 },
});

type Props = { items: string[] };

const UnorderedList = ({ items }: Props) => {
	if (items.length === 0) return null;

	return (
		<View>
			{items.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: items are never reordered
				<View key={index} style={styles.item} wrap={false}>
					<Text style={styles.bulletPoint}>•</Text>
					<Text style={styles.text}>{item}</Text>
				</View>
			))}
		</View>
	);
};

export { UnorderedList };
