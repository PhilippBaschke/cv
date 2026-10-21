import type { LinkProps } from "@react-pdf/renderer";
import { Link as ReactPDFLink, StyleSheet } from "@react-pdf/renderer";
import type { PropsWithChildren } from "react";
import { color } from "../tokens.js";
import { ensureStyleArray } from "./ensure-style-array.js";

const styles = StyleSheet.create({
	link: { color: color.text.intense, textDecoration: "none" },
	quiet: { color: color.text.quiet },
});

type Props = PropsWithChildren<
	LinkProps & {
		quiet?: boolean;
	}
>;

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
