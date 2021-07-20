import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id= "tech">
  <SectionDivider />
  <br />
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I've worked with a range of technologies in web development world.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Frameworks</ListTitle>
        <ListParagraph>
          Experience with <br />
          React.js Next.js Bootstrap
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Languages</ListTitle>
        <ListParagraph>
          Experience with <br />
          C C++ Javascript
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>Developer Tools</ListTitle>
        <ListParagraph>
          Experience with <br />
          VS Code  PyCharm  Heroku
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiReact size="3rem" />
      <ListContainer>
        <ListTitle>VCS</ListTitle>
        <ListParagraph>
          Git and GitHub 
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
  </Section>
);

export default Technologies;
