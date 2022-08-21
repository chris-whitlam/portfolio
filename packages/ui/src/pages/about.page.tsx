import { PageTitle } from '@atoms';
import { getProfile } from '@graphql';
import { About, Skills } from '@organisms';
import { Profile } from '@types';
import { FC } from 'react';

interface AboutPageProps {
  profile: Profile;
}

const AboutPage: FC<AboutPageProps> = ({ profile }) => {
  return (
    <>
      <PageTitle>About</PageTitle>
      <About profile={profile} />
      <Skills />
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await getProfile();

  return { props: { profile } };
};

export default AboutPage;
