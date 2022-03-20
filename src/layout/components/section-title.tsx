import { color, space, typeScale } from '../tokens';
import { Text } from './text';
import { StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  sectionTitle: {
    color: color.primary,
    fontSize: typeScale[0],
    marginBottom: space[2],
    marginTop: space[4],
    textTransform: 'uppercase',
  },
});

type Props = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => (
  <Text strong style={styles.sectionTitle}>
    {children}
  </Text>
);

export { SectionTitle };
