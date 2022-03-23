import type { PersonalData } from '../data-types/personal-data';
import { Text } from './components/text';
import { space, typeScale } from './tokens';
import React from 'react';
import { Image, StyleSheet, View } from '@react-pdf/renderer';

const imageSize = space[6];
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: space[2],
  },
  image: {
    borderRadius: imageSize,
    height: imageSize,
    // Visually align with the following text
    marginLeft: -space[1],
    marginRight: space[3],
    width: imageSize,
  },
  name: { fontSize: typeScale[4], lineHeight: 1.1 },
});

type Props = Omit<PersonalData, 'location'> & {
  image?: string;
};

const Header = ({ image, jobTitle, name }: Props) => (
  <View style={styles.container}>
    {image && <Image src={image} style={styles.image} />}
    <View>
      <Text strong style={styles.name}>
        {name}
      </Text>
      {jobTitle !== undefined && <Text>{jobTitle}</Text>}
    </View>
  </View>
);

export { Header };
