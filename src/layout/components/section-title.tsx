import { useConfig } from '../config';
import { space, typeScale } from '../tokens';
import { Text } from './text';
import { StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: typeScale[0],
    marginBottom: space[2],
    marginTop: space[4],
    textTransform: 'uppercase',
  },
});

type Props = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: Props) => {
  const config = useConfig();

  return (
    <Text strong style={[styles.sectionTitle, { color: config.color.primary }]}>
      {children}
    </Text>
  );
};

export { SectionTitle };
