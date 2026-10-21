import type ReactPDF from "@react-pdf/renderer";
import { StyleSheet, View } from "@react-pdf/renderer";
import React from "react";
import { useConfig } from "../config.js";
import { space } from "../tokens.js";
import { ensureStyleArray } from "./ensure-style-array.js";
import { Link } from "./link.js";
import { Text } from "./text.js";

const styles = StyleSheet.create({
	horizontal: { display: "flex", flexDirection: "row" },
	separator: { marginHorizontal: space[2] },
});

type TextItem = { text: string; type: "text" };
type LinkItem = { src: string; text: string; type: "link" };
type HorizontalListItem = LinkItem | TextItem;
type Props = ReactPDF.default.ViewProps & {
	items: HorizontalListItem[];
	quiet?: boolean;
};

const HorizontalList = ({ items, quiet, style }: Props) => {
	const config = useConfig();

	if (items.length === 0) return null;

	const combinedStyle = ensureStyleArray(style).concat(styles.horizontal);

	return (
		<View style={combinedStyle}>
			{items.map((item, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: items are never reordered
				<View key={index} style={styles.horizontal}>
					{index > 0 && (
						<Text style={[styles.separator, { color: config.color.primary }]}>
							|
						</Text>
					)}
					{item.type === "text" && <Text quiet={quiet}>{item.text}</Text>}
					{item.type === "link" && (
						<Link quiet={quiet} src={item.src}>
							{item.text}
						</Link>
					)}
				</View>
			))}
		</View>
	);
};

export type { HorizontalListItem };
export { HorizontalList };
