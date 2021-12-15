import { FC } from 'react';
import styled from 'styled-components';

import PortraitImage from '../assets/img/me.png';

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
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Introduction: FC = () => (
  <IntroductionContainer>
    <div>
      <H3>Hi, I'm </H3>
      <H1>Chris Whitlam</H1>
      <H2>{'<FULL-STACK DEVELOPER>'}</H2>
    </div>
    <img src={PortraitImage} alt="Chris Whitlam" />
  </IntroductionContainer>
);

export default Introduction;
