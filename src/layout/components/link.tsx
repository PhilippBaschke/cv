import type ReactPDF from "@react-pdf/renderer";
import { Link as ReactPDFLink, StyleSheet } from "@react-pdf/renderer";
import React from "react";
import { color } from "../tokens.js";
import { ensureStyleArray } from "./ensure-style-array.js";

const styles = StyleSheet.create({
	link: { color: color.text.intense, textDecoration: "none" },
	quiet: { color: color.text.quiet },
});

type Props = ReactPDF.default.LinkProps & {
	quiet?: boolean;
};

const Link = ({ children, quiet, style, ...linkProps }: Props) => {
	const combinedStyle = ensureStyleArray(style).concat([
		styles.link,
		quiet ? styles.quiet : {},
	]);

	return (
		<ReactPDFLink {...linkProps} style={combinedStyle}>
			{children}
		</ReactPDFLink>
	);
};

export { Link };
