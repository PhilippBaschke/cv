import type ReactPDF from "@react-pdf/renderer";
import { Text as ReactPDFText, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { color, fontWeight } from "../tokens";
import { ensureStyleArray } from "./ensure-style-array";

const styles = StyleSheet.create({
	quiet: { color: color.text.quiet },
	strong: { fontWeight: fontWeight.strong },
});

type Props = ReactPDF.TextProps & {
	quiet?: boolean;
	strong?: boolean;
};

const Text = ({ children, quiet, strong, style, ...textProps }: Props) => {
	const combinedStyle = ensureStyleArray(style).concat([
		quiet ? styles.quiet : {},
		strong ? styles.strong : {},
	]);

	return (
		<ReactPDFText {...textProps} style={combinedStyle}>
			{children}
		</ReactPDFText>
	);
};

export { Text };
