import { space } from '../tokens';
import { Text } from './text';
import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  bulletPoint: { marginLeft: space[2], marginRight: space[1] },
  container: { marginTop: space[2] },
  item: { display: 'flex', flexDirection: 'row' },
});

type Props = { items: string[] };

const UnorderedList = ({ items }: Props) => {
  if (items.length === 0) return null;

  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        // Using index as key is fine because the items are never reordered
        // https://reactjs.org/docs/reconciliation.html#keys
        <View key={index} style={styles.item}>
          <Text style={styles.bulletPoint}>•</Text>
          <Text>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export { UnorderedList };
