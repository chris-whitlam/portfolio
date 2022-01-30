import { FC } from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../theme';

const ButtonContainer = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  width: 12rem;
  height: auto;
`;

const IconContainer = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: relative;
  display: block;
  margin: 0;
  width: 3rem;
  height: 3rem;
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.text};

  border-radius: 1.625rem;

  ${ButtonContainer}:hover & {
    width: 100%;
  }
`;

const Icon = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 1em;
  left: 1em;
  color: ${({ theme: { colors } }) => colors.text};

  ${ButtonContainer}:hover & {
    transform: translateX(1em);
  }
`;

const Text = styled.span`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0.75rem 0;
  margin: 0 0 0 1.85rem;
  color: ${({ theme: { colors } }) => colors.text};
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text};

  ${ButtonContainer}:hover & {
    color: ${({ theme: { colors } }) => colors.text};
  }
`;

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  style?: React.CSSProperties;
  icon?: React.ReactElement;
}

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  style = {},
  children,
  icon,
  ...props
}) => {
  const isPrimary = variant === 'primary';

  return (
    <ButtonContainer style={style}>
      <IconContainer
        aria-hidden="true"
        style={isPrimary ? { width: '100%' } : {}}
      >
        <Icon style={isPrimary ? { transform: "translateX('1em')" } : {}}>
          {icon}
        </Icon>
      </IconContainer>
      <Text>{children}</Text>
    </ButtonContainer>
  );
};

export default Button;
