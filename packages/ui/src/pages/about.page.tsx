import Head from 'next/head';
import { PageTitle, BackLink } from '@atoms';
import { getProfile } from '@graphql';
import { About, Skills } from '@organisms';
import { Profile } from '@types';
import { FC } from 'react';
import { Box } from '@mui/material';

export interface AboutPageProps {
  profile: Profile;
}

const AboutPage: FC<AboutPageProps> = ({ profile }) => {
  return (
    <>
      <Head>
        <title>About - Chris Whitlam</title>
        <meta
          name="description"
          content="How I got into programming and a list of my skills"
        />
      </Head>
      <Box sx={{ width: { sm: '100%', md: '80%' } }}>
        <BackLink href="/" />
        <PageTitle>About Me</PageTitle>
        <About profile={profile} />
        <Skills />
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await getProfile();

  return { props: { profile } };
};

export default AboutPage;
