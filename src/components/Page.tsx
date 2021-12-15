import { FC } from 'react';
import { NodesBackground, CirclesBackground, CodeBackground } from '../assets';

import ParallaxGroup from './ParallaxGroup';

const Page: FC = () => (
  <div className="body">
    <div className="parallax">
      <ParallaxGroup background={<NodesBackground />} className="first_group">
        Hi I'm Chris Whitlam
      </ParallaxGroup>
      <ParallaxGroup
        background={<CirclesBackground />}
        className="second_group"
      >
        My Timeline
      </ParallaxGroup>
      <ParallaxGroup background={<CodeBackground />} className="third_group">
        Skills
      </ParallaxGroup>
    </div>
  </div>
);

export default Page;
