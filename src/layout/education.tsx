import type { EducationData } from '../data-types/education-data';
import { SectionTitle } from './components/section-title';
import { formatDate } from './format-date';
import { color, fontWeight, space, typeScale } from './tokens';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  bulletPoint: { marginLeft: space[2], marginRight: space[1] },
  degree: { fontSize: typeScale[1], fontWeight: fontWeight.strong },
  education: { marginTop: space[3] },
  information: { marginTop: space[2] },
  informationSection: { display: 'flex', flexDirection: 'row' },
  schoolAndDate: { color: color.text.quiet },
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
              <Text style={styles.degree}>{degree}</Text>
              <Text style={styles.schoolAndDate}>
                {school.website === undefined ? (
                  school.name
                ) : (
                  <Link src={`https://${school.website}`}>{school.name}</Link>
                )}
                {school.location === undefined
                  ? undefined
                  : ` (${school.location.city}, ${school.location.country})`}{' '}
                | {date}
              </Text>
              {information !== undefined && (
                <View style={styles.information}>
                  {information.map(({ title, content }, index) => (
                    // Using index as key is fine because the items are never reordered
                    // https://reactjs.org/docs/reconciliation.html#keys
                    <View style={styles.informationSection} key={index}>
                      <Text style={styles.bulletPoint}>•</Text>
                      <Text>
                        {title}: {content.join(', ')}
                      </Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          );
        },
      )}
    </View>
  );
};

export { Education };
