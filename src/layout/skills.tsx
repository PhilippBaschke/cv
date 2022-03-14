import type { SkillsData } from '../data-types/skills-data';
import { fontWeight, space, typeScale } from './tokens';
import { StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  container: { marginTop: space[3] },
  headline: { fontSize: typeScale[2], fontWeight: fontWeight.strong },
  skills: { marginTop: space[2] },
});

const Skills = ({ familiar, proficient }: SkillsData) => (
  <View style={styles.container}>
    <Text style={styles.headline}>Skills</Text>
    <View style={styles.skills}>
      <Text>Proficient: {proficient.join(', ')}</Text>
      <Text>Familiar: {familiar.join(', ')}</Text>
    </View>
  </View>
);

export { Skills };
