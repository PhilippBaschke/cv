import { color, fontWeight, space, typeScale } from '../tokens';
import { StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  sectionTitle: {
    color: color.primary,
    fontSize: typeScale[0],
    fontWeight: fontWeight.strong,
    marginBottom: space[2],
    marginTop: space[4],
    textTransform: 'uppercase',
  },
});

type Props = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);

export { SectionTitle };
