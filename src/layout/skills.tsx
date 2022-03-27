import type { SkillsData } from '../data-types/skills-data';
import { SectionTitle } from './components/section-title';
import { SkillsList } from './components/skills-list';
import { space } from './tokens';
import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  spacedList: { marginBottom: space[2] },
});

const Skills = ({ familiar, proficient }: SkillsData) => (
  <View>
    <SectionTitle>Skills</SectionTitle>
    <SkillsList
      skills={proficient}
      style={styles.spacedList}
      title="Proficient"
    />
    <SkillsList skills={familiar} title="Familiar" />
  </View>
);

export { Skills };
