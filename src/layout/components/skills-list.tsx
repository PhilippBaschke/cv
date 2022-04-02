import { useConfig } from '../config';
import { space } from '../tokens';
import { Text } from './text';
import ReactPDF, { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skill: {
    borderBottomWidth: 1,
    lineHeight: 1,
    marginBottom: space[1],
    marginRight: space[2],
    paddingBottom: space[1],
  },
});

type Props = {
  skills: string[];
  style?: ReactPDF.ViewProps['style'];
  title: string;
};

const SkillsList = ({ skills, style, title }: Props) => {
  const config = useConfig();

  return (
    <View style={style}>
      <Text strong>{title}</Text>
      <View style={styles.list}>
        {skills.map((skill, index) => (
          // Using index as key is fine because the items are never reordered
          // https://reactjs.org/docs/reconciliation.html#keys
          <Text
            key={index}
            style={[styles.skill, { borderColor: config.color.primary }]}
          >
            {skill}
          </Text>
        ))}
      </View>
    </View>
  );
};

export { SkillsList };
