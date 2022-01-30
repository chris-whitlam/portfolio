import { FC } from 'react';
import styled from 'styled-components';

import PortraitImage from '../assets/img/me.png';
import { device } from '../device';
import Button from './Button';

const H1 = styled.h1`
  font-family: 'Roboto Mono', 'Courier New', monospace;
  font-weight: 700;
  font-size: 7vh;
  line-height: 8vh;
`;

const H2 = styled.h2`
  font-family: 'Roboto Mono', 'Courier New', monospace;
  font-weight: 300;
  font-size: 3vh;
`;

const H3 = styled.h3`
  font-family: 'Roboto Mono', 'Courier New', monospace;
  font-weight: 300;
  font-size: 3vh;
`;

const IntroductionContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10vh 10vh;
  @media ${device.laptop} {
    height: 45vh;
  }
`;

const Image = styled.img`
  display: none;
  @media ${device.laptop} {
    display: block;
  }
`;

const Introduction: FC = () => (
  <IntroductionContainer>
    <div>
      <H3>Hi, I'm </H3>
      <H1>Chris Whitlam</H1>
      <H2>{'<FULL-STACK DEVELOPER>'}</H2>
      <Button style={{ marginRight: '50px' }}>Contact Me</Button>
      <Button variant="secondary">Download CV</Button>
    </div>
    <Image src={PortraitImage} alt="Chris Whitlam" />
  </IntroductionContainer>
);

export default Introduction;
