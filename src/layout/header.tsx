import type { ContactData } from '../data-types/contact-data';
import type { PersonalData } from '../data-types/personal-data';
import { Link } from './components/link';
import { SectionTitle } from './components/section-title';
import { Text } from './components/text';
import { color, space, typeScale } from './tokens';
import React from 'react';
import { Image, StyleSheet, View } from '@react-pdf/renderer';

const imageSize = space[6];

const styles = StyleSheet.create({
  section: { marginTop: space[2] },
  image: {
    borderRadius: imageSize,
    height: imageSize,
    // Visually align with the following text
    marginLeft: -space[1],
    marginRight: space[3],
    width: imageSize,
  },
  list: { display: 'flex', flexDirection: 'row' },
  listElement: {
    marginLeft: space[2],
    paddingLeft: space[2],
    borderLeftColor: color.text.quiet,
    borderLeftWidth: 1,
  },
  name: { fontSize: typeScale[4], lineHeight: 1.1 },
  nameSection: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: space[2],
  },
});

type Props = ContactData &
  PersonalData & {
    image?: string;
  };

const Header = ({
  email,
  github,
  image,
  jobTitle,
  linkedin,
  location,
  name,
  phone,
  summary,
  twitter,
  website,
}: Props) => (
  <View>
    <View style={styles.nameSection}>
      {image && <Image src={image} style={styles.image} />}
      <View>
        <Text strong style={styles.name}>
          {name}
        </Text>
        {jobTitle !== undefined && <Text>{jobTitle}</Text>}
      </View>
    </View>
    <View style={styles.section}>
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
    {summary !== undefined && (
      <View>
        <SectionTitle>Summary</SectionTitle>
        <Text>{summary}</Text>
      </View>
    )}
  </View>
);

export { Header };
