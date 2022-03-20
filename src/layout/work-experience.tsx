import type { WorkExperienceData } from '../data-types/work-experience-data';
import { SectionTitle } from './components/section-title';
import { SubTitle } from './components/sub-title';
import { Text } from './components/text';
import { Title } from './components/title';
import { formatDate } from './format-date';
import { space } from './tokens';
import { Link, StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
  achievement: { display: 'flex', flexDirection: 'row' },
  achievements: { marginTop: space[2] },
  bulletPoint: { marginLeft: space[2], marginRight: space[1] },
  workExperience: { marginTop: space[3] },
});

type Props = {
  workExperience: WorkExperienceData;
};

const WorkExperience = ({ workExperience }: Props) => {
  if (workExperience.length === 0) return null;

  return (
    <View>
      <SectionTitle>Work Experience</SectionTitle>
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
            <View
              key={index}
              style={index > 0 ? styles.workExperience : undefined}
            >
              <Title>{jobTitle}</Title>
              <SubTitle>
                {company.website === undefined ? (
                  company.name
                ) : (
                  <Link src={`https://${company.website}`}>{company.name}</Link>
                )}
                {company.location === undefined
                  ? undefined
                  : ` (${company.location.city}, ${company.location.country})`}{' '}
                | {date}
              </SubTitle>
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
