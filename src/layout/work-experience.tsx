import type { WorkExperienceData } from '../data-types/work-experience-data';
import { formatDate } from './format-date';
import { color, fontWeight, space, typeScale } from './tokens';
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  achievement: { display: 'flex', flexDirection: 'row' },
  achievements: { marginTop: space[2] },
  bulletPoint: { marginLeft: space[2], marginRight: space[1] },
  container: { marginTop: space[3] },
  companyAndDate: { color: color.text.quiet },
  headline: { fontSize: typeScale[2], fontWeight: fontWeight.strong },
  jobTitle: { fontSize: typeScale[1], fontWeight: fontWeight.strong },
  workExperience: { marginTop: space[3] },
});

type Props = {
  workExperience: WorkExperienceData;
};

const WorkExperience = ({ workExperience }: Props) => {
  if (workExperience.length === 0) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Work Experience</Text>
      {workExperience.map(
        (
          { achievements, company, endDate, jobTitle, product, startDate },
          index,
        ) => {
          const date =
            endDate === undefined
              ? `Since ${formatDate(startDate)}`
              : `${formatDate(startDate)}–${formatDate(endDate)}`;

          return (
            // Using index as key is fine because the items are never reordered
            // https://reactjs.org/docs/reconciliation.html#keys
            <View key={index} style={styles.workExperience}>
              <Text style={styles.jobTitle}>{jobTitle}</Text>
              <Text style={styles.companyAndDate}>
                {company.website === undefined ? (
                  company.name
                ) : (
                  <Link src={`https://${company.website}`}>{company.name}</Link>
                )}
                {company.location === undefined
                  ? undefined
                  : ` (${company.location.city}, ${company.location.country})`}{' '}
                | {date}
              </Text>
              {product !== undefined && (
                <Text>
                  {product.description}
                  {product.website !== undefined && (
                    <Text>
                      {' '}
                      (
                      <Link src={`https://${product.website}`}>
                        {product.website}
                      </Link>
                      )
                    </Text>
                  )}
                </Text>
              )}
              <View style={styles.achievements}>
                {achievements.map((achievement, index) => (
                  // Using index as key is fine because the items are never reordered
                  // https://reactjs.org/docs/reconciliation.html#keys
                  <View style={styles.achievement} key={index}>
                    <Text style={styles.bulletPoint}>•</Text>
                    <Text>{achievement}</Text>
                  </View>
                ))}
              </View>
            </View>
          );
        },
      )}
    </View>
  );
};

export { WorkExperience };
