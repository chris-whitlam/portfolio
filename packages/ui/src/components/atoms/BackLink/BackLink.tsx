import { FC } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

interface BackLinkProps {
  href?: string;
}

const BackLink: FC<BackLinkProps> = ({ href, ...rest }) => {
  const router = useRouter();

  return (
    <Button
      startIcon={<ChevronLeftIcon />}
      onClick={href ? () => router.push(href) : router.back}
      data-test-id="back-link"
      {...rest}
    >
      Back
    </Button>
  );
};

export default BackLink;
