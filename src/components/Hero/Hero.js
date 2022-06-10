import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';


const Hero = (props) => {

  // handleClick=()=> {
  //   window.location.replace('https://example.com/1234');
  // };
  
  return (
    <>
      <Section row nopadding>
        <LeftSection>
          <SectionTitle main center>
            Welcome To <br />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            Hello, I am Hein Thant.I'm the Frontend Developer Who proficient in React.js and Vue.js framework.
          </SectionText>
          <Button as="a" href='https://www.linkedin.com/in/hein-lay-dev-534a6223b' onClick={() =>{window.location.replace('https://www.linkedin.com/in/hein-lay-dev-534a6223b')}}>Contact Me</Button>
        </LeftSection>
      </Section>
    </>
  )
};

export default Hero;