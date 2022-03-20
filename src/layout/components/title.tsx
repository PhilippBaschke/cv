import { typeScale } from '../tokens';
import { Text } from './text';
import { StyleSheet } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  title: { fontSize: typeScale[1] },
});

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => (
  <Text strong style={styles.title}>
    {children}
  </Text>
);

export { Title };
