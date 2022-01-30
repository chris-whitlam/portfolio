import { FC } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { ImGithub } from 'react-icons/im';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.div`
  display: flex;
  min-width: 100vw;
  position: fixed;
  color: ${({ theme: { colors } }) => colors.primary};
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
        <FiMenu style={{ height: '100%' }} />
      </LeftSide>
      <RightSide>
        <HiOutlineMail height={45} width={45} />
        <ImGithub height={45} width={45} />
        <FaLinkedin height={45} width={45} />
      </RightSide>
    </HeaderContainer>
  );
};

export default Header;
