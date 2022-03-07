import type { HeaderData } from '../data-types/header-data';
import { Header } from './header';
import React from 'react';
import { Page, Document } from '@react-pdf/renderer';

type Props = {
  header: HeaderData;
};

const Cv = ({ header }: Props) => (
  <Document>
    <Page size="A4">
      <Header {...header} />
    </Page>
  </Document>
);

export { Cv };
