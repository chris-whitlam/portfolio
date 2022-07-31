import { FC, ReactNode } from 'react';
import { Typography, Box } from '@mui/material';
import { theme } from '@styles';
import ArrowLink from '../ArrowLink/ArrowLink';

interface SectionHeadingProps {
  children: ReactNode;
  href?: string;
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
      fontSize: { xs: '1.4rem', md: '1.6rem' }
    }}
  >
    {children}
  </Typography>
);

export const SectionHeading: FC<SectionHeadingProps> = ({ children, href }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: () => theme.spacing(2)
    }}
  >
    <SectionHeadingText>{children}</SectionHeadingText>
    {href && <ArrowLink href={href}>View all</ArrowLink>}
  </Box>
);

export const PageTitle: FC<BaseProps> = ({ children }) => (
  <Typography
    variant="h2"
    fontWeight={800}
    fontSize={35}
    sx={{
      fontFamily: `'Bungee Hairline', cursive;`,
      marginBottom: theme.spacing(4)
    }}
  >
    {children}
  </Typography>
);
