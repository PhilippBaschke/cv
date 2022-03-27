import { color, fontWeight } from '../tokens';
import { ensureStyleArray } from './ensure-style-array';
import ReactPDF, {
  StyleSheet,
  Text as ReactPDFText,
} from '@react-pdf/renderer';
import React from 'react';

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
