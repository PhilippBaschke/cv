import type { LinkProps, TextProps, ViewProps } from "@react-pdf/renderer";

type StyleProp = ViewProps["style"] | TextProps["style"] | LinkProps["style"];

/**
 * Ensure that the style prop is Style[] to be able to concat with more styles
 */
const ensureStyleArray = (style: StyleProp) => [style ?? []].flat();

export { ensureStyleArray };
