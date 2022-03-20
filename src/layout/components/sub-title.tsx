import { Text } from './text';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SubTitle = ({ children }: Props) => <Text quiet>{children}</Text>;

export { SubTitle };
