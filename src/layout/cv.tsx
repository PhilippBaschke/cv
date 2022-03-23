import type { ContactData } from '../data-types/contact-data';
import type { EducationData } from '../data-types/education-data';
import type { PersonalData } from '../data-types/personal-data';
import type { SkillsData } from '../data-types/skills-data';
import type { WorkExperienceData } from '../data-types/work-experience-data';
import { Education } from './education';
import { Header } from './header';
import { Skills } from './skills';
import {
  color,
  font,
  fontWeight,
  lineHeight,
  space,
  typeScale,
} from './tokens';
import { WorkExperience } from './work-experience';
import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

type Props = {
  contact: ContactData;
  education: EducationData;
  image?: string;
  personal: PersonalData;
  skills: SkillsData;
  workExperience: WorkExperienceData;
};

const styles = StyleSheet.create({
  page: {
    color: color.text.intense,
    fontFamily: font.base,
    fontSize: typeScale[0],
    fontWeight: fontWeight.base,
    lineHeight,
    padding: space[5],
    paddingLeft: space[6],
  },
});

const Cv = ({
  contact,
  education,
  image,
  personal,
  skills,
  workExperience,
}: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header image={image} {...contact} {...personal} />
      <WorkExperience workExperience={workExperience} />
      <Education education={education} />
      <Skills {...skills} />
    </Page>
  </Document>
);

export { Cv };
