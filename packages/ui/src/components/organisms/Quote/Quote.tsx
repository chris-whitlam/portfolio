import { FC, ReactNode } from "react";

import { Typography, Theme, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontStyle: 'italic',
    width: '100%',
  },
  quote: {
    padding: theme.spacing(2),
    fontSize: '1.5rem',
    textAlign: 'center',
    fontWeight: '400px',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    }
  },
  speaker: {
    color: theme.palette.grey[500]
  }
}), { name: 'Quote' });

interface QuoteProps {
  children: ReactNode;
  speaker: string;
}

const Quote: FC<QuoteProps> = ({ children, speaker }) => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Typography variant='h2' className={styles.quote}>{'"'}{children}{'"'}</Typography>
      <Typography variant='body2' className={styles.speaker}>- {speaker}</Typography>
    </Box>
  )
}

export default Quote;