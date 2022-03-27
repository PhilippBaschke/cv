import type { Location } from '../../data-types/location';
import { formatDate } from '../format-date';
import { space } from '../tokens';
import type { HorizontalListItem } from './horizontal-list';
import { HorizontalList } from './horizontal-list';
import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: { marginBottom: space[2] },
});

type Props = {
  endDate?: string;
  location?: Location;
  name: string;
  startDate: string;
  website?: string;
};

const SubTitle = ({ endDate, location, name, startDate, website }: Props) => {
  const date =
    endDate === undefined
      ? `Since ${formatDate(startDate)}`
      : `${formatDate(startDate)}–${formatDate(endDate)}`;

  const nameWithLocation =
    location === undefined
      ? name
      : `${name} (${location.city}, ${location.country})`;

  const items: HorizontalListItem[] = [
    website === undefined
      ? { text: nameWithLocation, type: 'text' }
      : { src: `https://${website}`, text: nameWithLocation, type: 'link' },
    { text: date, type: 'text' },
  ];

  return <HorizontalList items={items} quiet style={styles.container} />;
};

export { SubTitle };
