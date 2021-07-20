import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
   <LeftSection>
     <SectionTitle>
       Welcome To <br />
       My Personal Portfolio
     </SectionTitle>
     <SectionText>
       The Purpose of this Portfolio is to know me better. About my Technical skills as well as projects. 
     </SectionText>
     <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
   </LeftSection>
  </Section>
);

export default Hero;