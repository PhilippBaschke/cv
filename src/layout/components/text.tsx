import type { TextProps } from "@react-pdf/renderer";
import { Text as ReactPDFText, StyleSheet } from "@react-pdf/renderer";
import type { PropsWithChildren } from "react";
import { color, fontWeight } from "../tokens.js";
import { ensureStyleArray } from "./ensure-style-array.js";

const styles = StyleSheet.create({
	quiet: { color: color.text.quiet },
	strong: { fontWeight: fontWeight.strong },
});

type Props = PropsWithChildren<
	TextProps & {
		quiet?: boolean;
		strong?: boolean;
	}
>;

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
