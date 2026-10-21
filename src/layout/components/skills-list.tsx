import type ReactPDF from "@react-pdf/renderer";
import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { useConfig } from "../config.js";
import { space } from "../tokens.js";
import { Text } from "./text.js";

const styles = StyleSheet.create({
	list: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	skill: {
		borderBottomWidth: 1,
		lineHeight: 1,
		marginBottom: space[1],
		marginRight: space[2],
		paddingBottom: space[1],
	},
});

type Props = {
	skills: string[];
	style?: ReactPDF.default.ViewProps["style"];
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
