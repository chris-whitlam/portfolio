/* istanbul ignore file */

import dynamic from 'next/dynamic';

export const Header = dynamic(
  () => import(/* webpackChunkName: "header" */ './Header/Header')
);
export const Hero = dynamic(
  () => import(/* webpackChunkName: "hero" */ './Hero/Hero')
);
export const Projects = dynamic(
  () => import(/* webpackChunkName: "projects" */ './Projects/Projects')
);
export const Posts = dynamic(
  () => import(/* webpackChunkName: "posts" */ './Posts/Posts')
);
export const ContactForm = dynamic(
  () =>
    import(/* webpackChunkName: "contact-form" */ './ContactForm/ContactForm')
);
export const Quote = dynamic(
  () => import(/* webpackChunkName: "quote" */ './Quote/Quote')
);
export const Footer = dynamic(
  () => import(/* webpackChunkName: "footer" */ './Footer/Footer')
);
export const About = dynamic(
  () => import(/* webpackChunkName: "about" */ './About/About')
);
export const Skills = dynamic(
  () => import(/* webpackChunkName: "skills" */ './Skills/Skills')
);
