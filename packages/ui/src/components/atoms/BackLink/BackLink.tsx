import { FC } from 'react';
import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const BackLink: FC = ({ ...rest }) => {
  const router = useRouter();

  return (
    <Button
      startIcon={<ChevronLeftIcon />}
      onClick={router.back}
      data-test-id="back-link"
      {...rest}
    >
      Back
    </Button>
  );
};

export default BackLink;
