import type { ViewProps } from "@react-pdf/renderer";
import { StyleSheet, View } from "@react-pdf/renderer";
import { useConfig } from "../config.js";
import { space, typeScale } from "../tokens.js";
import { Text } from "./text.js";

const styles = StyleSheet.create({
	list: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	skill: {
		borderBottomWidth: 1,
		// react-pdf resolves unitless lineHeight against the element's own fontSize (default 18), not the inherited one
		fontSize: typeScale[0],
		lineHeight: 1,
		marginBottom: space[1],
		marginRight: space[2],
		paddingBottom: space[1],
	},
});

type Props = {
	skills: string[];
	style?: ViewProps["style"];
	title: string;
};

const SkillsList = ({ skills, style, title }: Props) => {
	const config = useConfig();

	return (
		<View style={style}>
			<Text strong>{title}</Text>
			<View style={styles.list}>
				{skills.map((skill, index) => (
					<Text
						// biome-ignore lint/suspicious/noArrayIndexKey: items are never reordered
						key={index}
						style={[styles.skill, { borderColor: config.color.primary }]}
					>
						{skill}
					</Text>
				))}
			</View>
		</View>
	);
};

export { SkillsList };
