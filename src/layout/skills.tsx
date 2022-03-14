import type { SkillsData } from '../data-types/skills-data';
import { SectionTitle } from './components/section-title';
import { Text, View } from '@react-pdf/renderer';
import React from 'react';

const Skills = ({ familiar, proficient }: SkillsData) => (
  <View>
    <SectionTitle>Skills</SectionTitle>
    <Text>Proficient: {proficient.join(', ')}</Text>
    <Text>Familiar: {familiar.join(', ')}</Text>
  </View>
);

export { Skills };
