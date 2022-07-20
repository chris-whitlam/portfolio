import { FC } from "react";

import { Box, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { Socials } from "@types";


const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '200px',
    textAlign: 'center',
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('md')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  socialsContainer: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    margin: `0 ${theme.spacing(2)} 0 ${theme.spacing(2)}`,
    transition: 'all .1s ease-in-out',

    '&:hover': {
      color: theme.palette.primary.main,
      transform: 'scale(1.5)'
    }
  }
}), { name: 'Footer' });

interface FooterProps {
  socials?: Socials
}

const Footer: FC<FooterProps> = ({ socials = {} }) => {
  const styles = useStyles();

  // TODO: 
  // Fetch these in the layout when https://github.com/vercel/next.js/discussions/37136 is released
  // For now, this will always use the defaults. Otherwise it would mean adding useStaticProps onto every page
  const {
    githubUrl = 'https://github.com/chris-whitlam',
    linkedInUrl = 'https://www.linkedin.com/in/christopher-whitlam-54456b173/',
    email = 'contact@chriswhitlam.dev'
  } = socials

  return (
    <Box className={styles.container}>
      <Typography variant='body2'>Created by Chris Whitlam</Typography>
      <Box className={styles.socialsContainer}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.icon}><GitHubIcon /></a>
        <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className={styles.icon}><LinkedInIcon /></a>
        <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className={styles.icon}><EmailIcon /></a>
      </Box>
    </Box >
  )
}

export default Footer;