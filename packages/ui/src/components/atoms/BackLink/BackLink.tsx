import { FC } from "react";
import { Button } from "@mui/material";
import { useRouter } from 'next/router'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const BackLink: FC = () => {
  const router = useRouter()

  return (
    <Button startIcon={<ChevronLeftIcon />} onClick={router.back}>Back</Button>
  );
}

export default BackLink;