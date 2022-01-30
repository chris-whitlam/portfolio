import { FC } from 'react';
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme: { colors } }) => colors.background};
  color: ${({ theme: { colors } }) => colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const UnderConstruction: FC = () => (
  <>
    <Body>
      <h1>This site is under construction</h1>
    </Body>
  </>
);

export default UnderConstruction;
