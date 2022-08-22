import { FC, ReactNode } from 'react';
import { Typography, Box, SxProps } from '@mui/material';
import { theme } from '@styles';
import ArrowLink from '../ArrowLink/ArrowLink';

interface SectionHeadingProps {
  children: ReactNode;
  href?: string;
  sx?: SxProps;
  'data-test-id'?: string;
}

interface BaseProps {
  children: ReactNode;
}

const SectionHeadingText: FC<BaseProps> = ({ children }) => (
  <Typography
    variant="h2"
    fontWeight={800}
    sx={{
      fontFamily: `'Bungee Hairline', cursive;`,
      fontSize: '2rem'
    }}
  >
    {children}
  </Typography>
);

export const SectionHeading: FC<SectionHeadingProps> = ({
  children,
  href,
  sx = {},
  ...rest
}) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: () => theme.spacing(2),
      ...sx
    }}
    data-test-id="section-heading"
    {...rest}
  >
    <SectionHeadingText>{children}</SectionHeadingText>
    {href && <ArrowLink href={href}>View all</ArrowLink>}
  </Box>
);

export const SubSectionHeading: FC<SectionHeadingProps> = ({
  children,
  sx = {},
  ...rest
}) => (
  <Typography
    variant="h3"
    fontWeight={800}
    sx={{
      fontFamily: `'Bungee Hairline', cursive;`,
      fontSize: '1.4rem',
      marginBottom: () => theme.spacing(2),
      ...sx
    }}
    data-test-id="sub-section-heading"
    {...rest}
  >
    {children}
  </Typography>
);

export const PageTitle: FC<BaseProps> = ({ children, ...rest }) => (
  <Typography
    variant="h2"
    fontWeight={800}
    fontSize="2.5rem"
    sx={{
      fontFamily: `'Bungee Hairline', cursive;`,
      marginBottom: theme.spacing(4)
    }}
    data-test-id="page-title"
    {...rest}
  >
    {children}
  </Typography>
);
