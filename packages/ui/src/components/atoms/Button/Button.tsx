import { FC, CSSProperties } from 'react';

import {
  Button as MUIButton,
  ButtonProps as MUIButtonProps,
  CircularProgress
} from '@mui/material';
import { theme } from '@styles';

interface ButtonProps extends MUIButtonProps {
  size?: 'medium' | 'large' | 'small';
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'large',
  type = 'button',
  isLoading = false,
  endIcon,
  disabled = false,
  ...rest
}) => {
  const muiVariant = variant !== 'primary' ? 'outlined' : 'contained';
  const color = variant as MUIButtonProps['color'];

  const defaultStyles: CSSProperties = {
    boxShadow: '3px 3px #1a1a1a'
  };
  const styles: Record<string, CSSProperties> = {
    secondary: {
      ...defaultStyles,
      backgroundColor: theme.palette.background.default
    }
  };

  const style = styles[variant] || defaultStyles;

  return (
    <MUIButton
      type={type}
      variant={muiVariant}
      size={size}
      color={color}
      endIcon={
        isLoading ? (
          <CircularProgress sx={{ maxHeight: '25px', maxWidth: '25px' }} />
        ) : (
          endIcon
        )
      }
      disabled={isLoading || disabled}
      style={style}
      {...rest}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
