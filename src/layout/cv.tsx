import type { ContactData } from '../data-types/contact-data';
import type { EducationData } from '../data-types/education-data';
import type { PersonalData } from '../data-types/personal-data';
import type { SkillsData } from '../data-types/skills-data';
import type { WorkExperienceData } from '../data-types/work-experience-data';
import { useConfig } from './config';
import { ContactAndLocation } from './contact-location';
import { Education } from './education';
import { Header } from './header';
import { Skills } from './skills';
import { Summary } from './summary';
import { color, fontWeight, lineHeight, space, typeScale } from './tokens';
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
}: Props) => {
  const config = useConfig();

  return (
    <Document>
      <Page size="A4" style={[styles.page, { fontFamily: config.font.base }]}>
        <Header
          image={image}
          jobTitle={personal.jobTitle}
          name={personal.name}
        />
        <ContactAndLocation {...contact} location={personal.location} />
        <Summary summary={personal.summary} />
        <WorkExperience workExperience={workExperience} />
        <Education education={education} />
        <Skills {...skills} />
      </Page>
    </Document>
  );
};

export { Cv };
