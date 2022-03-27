import { color, space } from '../tokens';
import { Link } from './link';
import { Text } from './text';
import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  list: { display: 'flex', flexDirection: 'row' },
  listElement: {
    marginLeft: space[2],
    paddingLeft: space[2],
    borderLeftColor: color.text.quiet,
    borderLeftWidth: 1,
  },
});

type TextItem = { text: string; type: 'text' };
type LinkItem = { src: string; text: string; type: 'link' };
type HorizontalListItem = LinkItem | TextItem;
type Props = { items: HorizontalListItem[] };

const HorizontalList = ({ items }: Props) => {
  if (items.length === 0) return null;

  return (
    <View style={styles.list}>
      {items.map((item, index) => {
        const commonProps = {
          // Using index as key is fine because the items are never reordered
          // https://reactjs.org/docs/reconciliation.html#keys
          key: index,
          style: index > 0 ? styles.listElement : undefined,
        };

        if (item.type === 'text') {
          return <Text {...commonProps}>{item.text}</Text>;
        }

        return (
          <Link {...commonProps} src={item.src}>
            {item.text}
          </Link>
        );
      })}
    </View>
  );
};

export type { HorizontalListItem };
export { HorizontalList };
