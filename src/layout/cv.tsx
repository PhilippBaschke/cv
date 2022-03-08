import type { ContactData } from '../data-types/contact-data';
import type { PersonalData } from '../data-types/personal-data';
import { Header } from './header';
import React from 'react';
import { Page, Document, StyleSheet } from '@react-pdf/renderer';

type Props = {
  contact: ContactData;
  personal: PersonalData;
};

const styles = StyleSheet.create({
  page: { fontSize: 10, padding: 16 },
});

const Cv = ({ contact, personal }: Props) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header {...contact} {...personal} />
    </Page>
  </Document>
);

export { Cv };
