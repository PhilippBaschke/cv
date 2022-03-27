import type { ContactData } from '../data-types/contact-data';
import type { PersonalData } from '../data-types/personal-data';
import type { HorizontalListItem } from './components/horizontal-list';
import { HorizontalList } from './components/horizontal-list';
import { space } from './tokens';
import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: { marginTop: space[2] },
});

type Props = ContactData & Pick<PersonalData, 'location'>;

const ContactAndLocation = ({
  email,
  github,
  linkedin,
  location,
  phone,
  twitter,
  website,
}: Props) => {
  const locationAndContactItems: HorizontalListItem[] = [];
  const linkItems: HorizontalListItem[] = [];

  if (location !== undefined) {
    locationAndContactItems.push({
      text: `${location.city}, ${location.country}`,
      type: 'text',
    });
  }

  locationAndContactItems.push(
    { src: `mailto:${email}`, text: email, type: 'link' },
    {
      src: `tel:${phone.split(' ').join('')}`,
      text: phone,
      type: 'link',
    },
  );

  if (github !== undefined) {
    linkItems.push({
      src: `https://github.com/${github}`,
      text: `github.com/${github}`,
      type: 'link',
    });
  }

  if (linkedin !== undefined) {
    linkItems.push({
      src: `https://www.linkedin.com/in/${linkedin}`,
      text: `linkedin.com/in/${linkedin}`,
      type: 'link',
    });
  }

  if (website !== undefined) {
    linkItems.push({
      src: `https://${website}`,
      text: website,
      type: 'link',
    });
  }

  if (twitter !== undefined) {
    linkItems.push({
      src: `https://twitter.com/${twitter}`,
      text: `twitter.com/${twitter}`,
      type: 'link',
    });
  }

  return (
    <View style={styles.container}>
      <HorizontalList items={locationAndContactItems} />
      <HorizontalList items={linkItems} />
    </View>
  );
};

export { ContactAndLocation };
