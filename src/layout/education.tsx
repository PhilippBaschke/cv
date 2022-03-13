import type { EducationData } from '../data-types/education-data';
import { formatDate } from './format-date';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  bulletPoint: { marginLeft: 8, marginRight: 4 },
  container: { marginTop: 16 },
  degree: { fontSize: 12, fontWeight: 700 },
  education: { marginTop: 16 },
  headline: { fontSize: 14, fontWeight: 700 },
  information: { marginTop: 8 },
  informationSection: { display: 'flex', flexDirection: 'row' },
  schoolAndDate: { color: 'gray' },
});

type Props = {
  education: EducationData;
};

const Education = ({ education }: Props) => {
  if (education.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Education</Text>
      {education.map(
        ({ degree, endDate, information, school, startDate }, index) => {
          const date =
            endDate === undefined
              ? `Since ${formatDate(startDate)}`
              : `${formatDate(startDate)}–${formatDate(endDate)}`;

          return (
            // Using index as key is fine because the items are never reordered
            // https://reactjs.org/docs/reconciliation.html#keys
            <View key={index} style={styles.education}>
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
