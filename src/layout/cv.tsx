import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';

const Cv = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>CV</Text>
      </View>
    </Page>
  </Document>
);

export { Cv };
