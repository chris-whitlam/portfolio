import { FC, ReactNode } from 'react';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Button } from '@mui/material';

interface ArrowLinkProps {
  children: ReactNode;
  href: string;
}

const ArrowLink: FC<ArrowLinkProps> = ({ children, href, ...rest }) => {
  return (
    <Link passHref href={href}>
      <Button
        sx={{ fontSize: { xs: '0.8rem', md: '1rem' } }}
        endIcon={<ArrowForwardIosIcon />}
        {...rest}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ArrowLink;
