import Head from 'next/head';
import { BackLink, PageTitle, Socials } from '@atoms';
import { ContactForm } from '@organisms';
import { FC } from 'react';
import { getProfile } from '@graphql';
import { Profile } from '@types';
import { Box } from '@mui/material';

export interface ContactPageProps {
  profile: Profile;
}

const Contact: FC<ContactPageProps> = ({ profile: { socials } }) => {
  return (
    <>
      <Head>
        <title>Contact - Chris Whitlam</title>
        <meta
          name="description"
          content="You can easily contact me via this form or via LinkedIn or email"
        />
      </Head>
      <Box sx={{ width: { sm: '100%', md: '80%' } }}>
        <BackLink />
        <PageTitle>Let&apos;s get in contact</PageTitle>
        <Socials socials={socials} />
        <ContactForm heading="" sx={{ width: '100%' }} />
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await getProfile();

  return { props: { profile } };
};

export default Contact;
