import type { PersonalData } from '../data-types/personal-data';
import { SectionTitle } from './components/section-title';
import { Text } from './components/text';
import React from 'react';
import { View } from '@react-pdf/renderer';

type Props = Pick<PersonalData, 'summary'>;

const Summary = ({ summary }: Props) => {
  if (summary === undefined) return null;

  return (
    <View>
      <SectionTitle>Summary</SectionTitle>
      <Text>{summary}</Text>
    </View>
  );
};

export { Summary };
