import { useConfig } from '../config';
import { space } from '../tokens';
import { ensureStyleArray } from './ensure-style-array';
import { Link } from './link';
import { Text } from './text';
import React from 'react';
import ReactPDF, { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  horizontal: { display: 'flex', flexDirection: 'row' },
  separator: { marginHorizontal: space[2] },
});

type TextItem = { text: string; type: 'text' };
type LinkItem = { src: string; text: string; type: 'link' };
type HorizontalListItem = LinkItem | TextItem;
type Props = ReactPDF.ViewProps & {
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
        // Using index as key is fine because the items are never reordered
        // https://reactjs.org/docs/reconciliation.html#keys
        <View key={index} style={styles.horizontal}>
          {index > 0 && (
            <Text style={[styles.separator, { color: config.color.primary }]}>
              |
            </Text>
          )}
          {item.type === 'text' && <Text quiet={quiet}>{item.text}</Text>}
          {item.type === 'link' && (
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
