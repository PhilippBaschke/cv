import type { ContactData } from '../data-types/contact-data';
import type { PersonalData } from '../data-types/personal-data';
import type { WorkExperienceData } from '../data-types/work-experience-data';
import { Header } from './header';
import { WorkExperience } from './work-experience';
import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

type Props = {
  contact: ContactData;
  personal: PersonalData;
  workExperience: WorkExperienceData;
};

const styles = StyleSheet.create({
  page: { fontSize: 10, padding: 16 },
});

const Cv = ({ contact, personal, workExperience }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header {...contact} {...personal} />
      <WorkExperience workExperience={workExperience} />
    </Page>
  </Document>
);

export { Cv };
