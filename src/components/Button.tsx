import { FC } from 'react';
import styled, { css } from 'styled-components';
import { device } from '../device';

const baseButtonStyle = css`
  border-radius: 40px;
  padding: ${({ theme: { spacing } }) => spacing.medium};
  font-weight: 800;
  font-family: 'Roboto Mono', 'Courier New', monospace;
  cursor: pointer;
  font-size: 15px;

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

const PrimaryButton = styled.button`
  ${baseButtonStyle}
  background-color: ${({ theme: { colors } }) => colors.primary};
  border-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};
`;

const SecondaryButton = styled.button`
  ${baseButtonStyle}
  background-color: ${({ theme: { colors } }) => colors.background};
  border-color: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.primary};
`;

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  style = {},
  children,
  ...props
}) => {
  switch (variant) {
    case 'primary':
      return (
        <PrimaryButton style={style} {...props}>
          {children}
        </PrimaryButton>
      );
    case 'secondary':
      return (
        <SecondaryButton style={style} {...props}>
          {children}
        </SecondaryButton>
      );
  }
};

export default Button;
