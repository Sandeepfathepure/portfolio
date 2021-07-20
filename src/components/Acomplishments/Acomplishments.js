import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Open Source Projects'},
  {  text: 'Participated at various hackathons and coding contests', },
  {  text: 'Was an Executive member of the operations team of Engineer NITK 2019 tech fest .', },
  {  text: 'Was an Executive member of the operations team of Incident NITK 2020 cultural fest .', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Activities and Volunteer work</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
