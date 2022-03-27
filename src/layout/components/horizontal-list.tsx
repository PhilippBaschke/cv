import { color, space } from '../tokens';
import { Link } from './link';
import { Text } from './text';
import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  horizontal: { display: 'flex', flexDirection: 'row' },
  separator: { color: color.primary, marginHorizontal: space[2] },
});

type TextItem = { text: string; type: 'text' };
type LinkItem = { src: string; text: string; type: 'link' };
type HorizontalListItem = LinkItem | TextItem;
type Props = { items: HorizontalListItem[] };

const HorizontalList = ({ items }: Props) => {
  if (items.length === 0) return null;

  return (
    <View style={styles.horizontal}>
      {items.map((item, index) => (
        // Using index as key is fine because the items are never reordered
        // https://reactjs.org/docs/reconciliation.html#keys
        <View key={index} style={styles.horizontal}>
          {index > 0 && <Text style={styles.separator}>|</Text>}
          {item.type === 'text' && <Text>{item.text}</Text>}
          {item.type === 'link' && <Link src={item.src}>{item.text}</Link>}
        </View>
      ))}
    </View>
  );
};

export type { HorizontalListItem };
export { HorizontalList };
