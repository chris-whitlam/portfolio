import { PageTitle, Socials } from '@atoms';
import { ContactForm } from '@organisms';
import { FC } from 'react';
import { getProfile } from '@graphql';
import { Profile } from '@types';

export interface ContactPageProps {
  profile: Profile;
}

const Contact: FC<ContactPageProps> = ({ profile: { socials } }) => {
  return (
    <>
      <PageTitle>Let&apos;s get in contact</PageTitle>
      <Socials socials={socials} />
      <ContactForm />
    </>
  );
};

export const getStaticProps = async () => {
  const profile = await getProfile();

  return { props: { profile } };
};

export default Contact;
