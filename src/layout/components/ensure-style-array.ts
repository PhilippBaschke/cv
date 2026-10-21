import type ReactPDF from "@react-pdf/renderer";

type StyleProp =
	| ReactPDF.default.ViewProps["style"]
	| ReactPDF.default.TextProps["style"]
	| ReactPDF.default.LinkProps["style"];

/**
 * Ensure that the style prop is Style[] to be able to concat with more styles
 */
const ensureStyleArray = (style: StyleProp) => [style ?? []].flat();

export { ensureStyleArray };
