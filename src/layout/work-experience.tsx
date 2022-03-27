import type { WorkExperienceData } from '../data-types/work-experience-data';
import { Link } from './components/link';
import { SectionTitle } from './components/section-title';
import { SubTitle } from './components/sub-title';
import { Text } from './components/text';
import { Title } from './components/title';
import { UnorderedList } from './components/unordered-list';
import { space } from './tokens';
import { StyleSheet, View } from '@react-pdf/renderer';
import React from 'react';

const styles = StyleSheet.create({
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
        ) => (
          // Using index as key is fine because the items are never reordered
          // https://reactjs.org/docs/reconciliation.html#keys
          <View
            key={index}
            style={index > 0 ? styles.workExperience : undefined}
          >
            <Title>{jobTitle}</Title>
            <SubTitle endDate={endDate} startDate={startDate} {...company} />
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
            <UnorderedList items={achievements} />
          </View>
        ),
      )}
    </View>
  );
};

export { WorkExperience };
