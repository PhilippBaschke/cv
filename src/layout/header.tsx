import type { HeaderData } from '../data/header';
import React from 'react';
import { Text, View } from '@react-pdf/renderer';

const Header = ({ email, name }: HeaderData) => (
  <View>
    <Text>{name}</Text>
    <Text>{email}</Text>
  </View>
);

export { Header };
