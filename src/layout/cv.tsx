import type { ContactData } from '../data-types/contact-data';
import type { EducationData } from '../data-types/education-data';
import type { PersonalData } from '../data-types/personal-data';
import type { SkillsData } from '../data-types/skills-data';
import type { WorkExperienceData } from '../data-types/work-experience-data';
import { Education } from './education';
import { Header } from './header';
import { Skills } from './skills';
import { color, font } from './tokens';
import { WorkExperience } from './work-experience';
import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

type Props = {
  contact: ContactData;
  education: EducationData;
  personal: PersonalData;
  skills: SkillsData;
  workExperience: WorkExperienceData;
};

const styles = StyleSheet.create({
  page: {
    color: color.text.intense,
    fontFamily: font.base,
    fontSize: 10,
    padding: 16,
  },
});

const Cv = ({
  contact,
  education,
  personal,
  skills,
  workExperience,
}: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header {...contact} {...personal} />
      <WorkExperience workExperience={workExperience} />
      <Education education={education} />
      <Skills {...skills} />
    </Page>
  </Document>
);

export { Cv };
