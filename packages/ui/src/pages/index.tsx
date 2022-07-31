import type { NextPage } from 'next'

import { Hero, Projects, Posts, ContactForm, Quote } from '@organisms';
import { getHomepageData } from '@graphql';
import { Project, Post, Profile } from '@types';
import { useCallback, useRef } from 'react';
import { ScrollToTop } from '@atoms';

interface HomePageProps {
  profile: Profile;
  projects: Project[];
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ profile, projects, posts }) => {
  const contactFormInputRef = useRef<HTMLInputElement>(null)

  const scrollToContactForm = useCallback(
    () => {
      if (contactFormInputRef?.current) {
        contactFormInputRef.current.focus();
      }
    },
    []
  )

  return (
    <>
      <Hero profile={profile} scrollToContactForm={scrollToContactForm} />
      <Quote speaker='Kent Beck'>
        Make it work, make it right, make it fast.
      </Quote>
      <Projects projects={projects} />
      <Posts posts={posts} />
      <ContactForm ref={contactFormInputRef} />
    </>
  )
}

export const getStaticProps = async () => {
  const props = await getHomepageData({ numOfFeaturesProjects: 5 });

  return { props };
}


export default Home;
