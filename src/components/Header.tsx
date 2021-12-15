import { FC } from 'react';
import styled from 'styled-components';
import EmailIcon from '../assets/img/EmailIcon';
import GithubIcon from '../assets/img/GithubIcon';
import LinkedInIcon from '../assets/img/LinkedInIcon';
import MenuIcon from '../assets/img/MenuIcon';

const HeaderContainer = styled.div`
  display: flex;
  min-width: 100vw;
  position: fixed;
`;

const LeftSide = styled.div`
  flex: 50%;
  padding-left: ${({ theme: { spacing } }) => spacing.medium};
  padding-top: ${({ theme: { spacing } }) => spacing.medium};
`;

const RightSide = styled.div`
  min-width: 170px;
  padding-top: ${({ theme: { spacing } }) => spacing.medium};
  padding-right: ${({ theme: { spacing } }) => spacing.medium};
  display: flex;
  justify-content: space-between;
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <LeftSide>
        <MenuIcon height={45} width={45} />
      </LeftSide>
      <RightSide>
        <EmailIcon height={45} width={45} />
        <GithubIcon height={45} width={45} />
        <LinkedInIcon height={45} width={45} />
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
