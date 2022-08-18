import type { NextPage } from 'next';

import { Hero, Projects, Posts, ContactForm, Quote } from '@organisms';
import { getHomepageData } from '@graphql';
import { Project, Post, Profile } from '@types';

export interface HomePageProps {
  profile: Profile;
  projects: Project[];
  posts: Post[];
}

const Home: NextPage<HomePageProps> = ({ profile, projects, posts }) => (
  <>
    <Hero profile={profile} />
    <Quote speaker="Kent Beck">
      Make it work, make it right, make it fast.
    </Quote>
    <Projects projects={projects} />
    <Posts posts={posts} />
    <ContactForm />
  </>
);

export const getStaticProps = async () => {
  const props = await getHomepageData({ numOfFeaturedProjects: 5 });

  return { props };
};

export default Home;
