import { FC } from 'react';
import styled from 'styled-components';
// import { NodesBackground, CirclesBackground, CodeBackground } from '../assets';

import NodesBackground from '../assets/img/nodes_background.svg';
import CirclesBackground from '../assets/img/circle_background.svg';
import CodeBackground from '../assets/img/code_background.svg';

import Hero from './Hero';

import ParallaxGroup from './ParallaxGroup';
import Header from './Header';

const Parallax = styled.div`
  perspective: 1px;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Body = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Page: FC = () => (
  <>
    <Header />
    <Body>
      <Hero />
      {/* <Parallax>
      <ParallaxGroup
        backgroundStyle={{ backgroundImage: `url(${NodesBackground})` }}
      >
        <Introduction />
      </ParallaxGroup>
      <ParallaxGroup
        backgroundStyle={{ backgroundImage: `url(${CirclesBackground})` }}
      >
        My Timeline
      </ParallaxGroup>
      <ParallaxGroup
        backgroundStyle={{ backgroundImage: `url(${CodeBackground})` }}
      >
        Skills
      </ParallaxGroup>
    </Parallax> */}
    </Body>
  </>
);

export default Page;
