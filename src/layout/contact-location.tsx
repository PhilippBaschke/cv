import type { ContactData } from '../data-types/contact-data';
import type { PersonalData } from '../data-types/personal-data';
import { Link } from './components/link';
import { Text } from './components/text';
import { color, space } from './tokens';
import React from 'react';
import { StyleSheet, View } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: { marginTop: space[2] },
  list: { display: 'flex', flexDirection: 'row' },
  listElement: {
    marginLeft: space[2],
    paddingLeft: space[2],
    borderLeftColor: color.text.quiet,
    borderLeftWidth: 1,
  },
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
}: Props) => (
  <View style={styles.container}>
    <View style={styles.list}>
      {location !== undefined && (
        <Text>
          {location.city}, {location.country}
        </Text>
      )}
      <Link
        src={`mailto:${email}`}
        style={location === undefined ? undefined : styles.listElement}
      >
        {email}
      </Link>
      <Link src={`tel:${phone}`} style={styles.listElement}>
        {phone}
      </Link>
    </View>
    <View style={styles.list}>
      {github !== undefined && (
        <Link src={`https://github.com/${github}`}>github.com/{github}</Link>
      )}
      {linkedin !== undefined && (
        <Link
          src={`https://www.linkedin.com/in/${linkedin}`}
          style={github === undefined ? undefined : styles.listElement}
        >
          linkedin.com/in/{linkedin}
        </Link>
      )}
      {website !== undefined && (
        <Link
          src={`https://${website}`}
          style={
            github === undefined && linkedin === undefined
              ? undefined
              : styles.listElement
          }
        >
          {website}
        </Link>
      )}
      {twitter !== undefined && (
        <Link
          src={`https://twitter.com/${twitter}`}
          style={
            github === undefined &&
            linkedin === undefined &&
            website === undefined
              ? undefined
              : styles.listElement
          }
        >
          twitter.com/{twitter}
        </Link>
      )}
    </View>
  </View>
);

export { ContactAndLocation };
