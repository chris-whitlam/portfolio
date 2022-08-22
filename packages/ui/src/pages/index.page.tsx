import Head from 'next/head';
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
    <Head>
      <title>Chris Whitlam</title>
      <meta
        name="description"
        content="A showcase of programming projects and blog posts to teach and inspire other developers. Get inspired!"
      />
    </Head>
    <Hero profile={profile} />
    <Quote speaker="Kent Beck">
      Make it work, make it right, make it fast.
    </Quote>
    <Projects projects={projects} />
    <Posts posts={posts} />
    <ContactForm sx={{ width: { sm: '100%', md: '80%' } }} />
  </>
);

export const getStaticProps = async () => {
  const props = await getHomepageData({ numOfFeaturedProjects: 5 });

  return { props };
};

export default Home;
