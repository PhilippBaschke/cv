import type { EducationData } from '../data-types/education-data';
import { SectionTitle } from './components/section-title';
import { SubTitle } from './components/sub-title';
import { Title } from './components/title';
import { UnorderedList } from './components/unordered-list';
import { space } from './tokens';
import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  education: { marginTop: space[3] },
});

type Props = {
  education: EducationData;
};

const Education = ({ education }: Props) => {
  if (education.length === 0) return null;

  return (
    <View>
      <SectionTitle>Education</SectionTitle>
      {education.map(
        ({ degree, endDate, information, school, startDate }, index) => (
          // Using index as key is fine because the items are never reordered
          // https://reactjs.org/docs/reconciliation.html#keys
          <View key={index} style={index > 0 ? styles.education : undefined}>
            <Title>{degree}</Title>
            <SubTitle endDate={endDate} startDate={startDate} {...school} />
            {information !== undefined && (
              <UnorderedList
                items={information.map(
                  ({ content, title }) => `${title}: ${content.join(', ')}`,
                )}
              />
            )}
          </View>
        ),
      )}
    </View>
  );
};

export { Education };
