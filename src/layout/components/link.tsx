import { color } from '../tokens';
import { ensureStyleArray } from './ensure-style-array';
import ReactPDF, {
  StyleSheet,
  Link as ReactPDFLink,
} from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  link: { color: color.text.intense, textDecoration: 'none' },
  quiet: { color: color.text.quiet },
});

type Props = ReactPDF.LinkProps & {
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
