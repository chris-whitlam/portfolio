import Head from 'next/head';
import { BackLink, PageTitle } from '@atoms';
import { getProfile } from '@graphql';
import { Box } from '@mui/material';
import { About, Skills } from '@organisms';
import { Profile } from '@types';
import { FC } from 'react';

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
      <Box>
        <BackLink />
        <PageTitle>About</PageTitle>
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
