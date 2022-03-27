import type { EducationData } from '../data-types/education-data';
import { SectionTitle } from './components/section-title';
import { SubTitle } from './components/sub-title';
import { SubTitleLink } from './components/sub-title-link';
import { Title } from './components/title';
import { UnorderedList } from './components/unordered-list';
import { formatDate } from './format-date';
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
        ({ degree, endDate, information, school, startDate }, index) => {
          const date =
            endDate === undefined
              ? `Since ${formatDate(startDate)}`
              : `${formatDate(startDate)}–${formatDate(endDate)}`;

          return (
            // Using index as key is fine because the items are never reordered
            // https://reactjs.org/docs/reconciliation.html#keys
            <View key={index} style={index > 0 ? styles.education : undefined}>
              <Title>{degree}</Title>
              <SubTitle>
                {school.website === undefined ? (
                  school.name
                ) : (
                  <SubTitleLink src={`https://${school.website}`}>
                    {school.name}
                  </SubTitleLink>
                )}
                {school.location === undefined
                  ? undefined
                  : ` (${school.location.city}, ${school.location.country})`}{' '}
                | {date}
              </SubTitle>
              {information !== undefined && (
                <UnorderedList
                  items={information.map(
                    ({ content, title }) => `${title}: ${content.join(', ')}`,
                  )}
                />
              )}
            </View>
          );
        },
      )}
    </View>
  );
};

export { Education };
