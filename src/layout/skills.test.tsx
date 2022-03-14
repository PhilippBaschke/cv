// import { Skills } from './skills';
// import React from 'react';
// import { renderComponent } from 'react-pdf-testing-library';
// import { Text } from '@react-pdf/renderer';

// describe('layout/skills', () => {
//   it('should match the image snapshot', async () => {
//     const wrapper = await renderComponent(
//       // <Skills familiar={['Test', 'hi']} proficient={['Test']} />,
//       <Text>Hiii</Text>,
//     );

//     expect(await wrapper.imageSnapshot()).toMatchImageSnapshot();
//   });
// });

import React from 'react';
import { View, Text } from '@react-pdf/renderer';
import { renderComponent } from 'react-pdf-testing-library';

const TextBox = ({ text }: { text: string; font: string }) => (
  <View>
    <Text style={{ fontWeight: 700 }}>{text}</Text>
  </View>
);

it('should render Open Sans', async () => {
  const wrapper = await renderComponent(
    <>
      <TextBox text="java" font="Open Sans" />
      <TextBox text="script" font="Open Sans" />
      <TextBox text="rulez" font="Open Sans" />
    </>,
  );

  expect(await wrapper.imageSnapshot()).toMatchImageSnapshot();
});
