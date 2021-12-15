import { ReactElement, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { NodesBackground } from '../assets';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  transform-style: preserve-3d;
`;

const ParallaxLayerStyles = `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100vw;
`;

const ParallaxBackgroundLayer = styled.div`
  ${ParallaxLayerStyles}
  transform: translateZ(-1px) scale();
  height: 100%;
`;

const ParallaxForegroundLayer = styled.div`
  ${ParallaxLayerStyles}
  transform: translateZ(0);
`;

interface ParallaxGroupProps {
  backgroundStyle: React.CSSProperties;
  style?: React.CSSProperties;
}

const ParallaxGroup: FC<ParallaxGroupProps> = ({
  backgroundStyle,
  style,
  children,
}) => {
  return (
    <ParallaxContainer style={style}>
      <ParallaxBackgroundLayer>
        <NodesBackground />
      </ParallaxBackgroundLayer>
      <ParallaxForegroundLayer>{children}</ParallaxForegroundLayer>
    </ParallaxContainer>
  );
};

export default ParallaxGroup;
