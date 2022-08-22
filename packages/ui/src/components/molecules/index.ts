import dynamic from 'next/dynamic';

/* istanbul ignore file */

export const ProjectCard = dynamic(
  () =>
    import(/* webpackChunkName: "project-card" */ './ProjectCard/ProjectCard')
);
export const PostCard = dynamic(
  () => import(/* webpackChunkName: "post-card" */ './PostCard/PostCard')
);
export const Carousel = dynamic(
  () => import(/* webpackChunkName: "carousel" */ './Carousel/Carousel')
);
export const SkillList = dynamic(
  () => import(/* webpackChunkName: "skills-list" */ './SkillList/SkillList')
);

export { default as LazyLoader } from './LazyLoader/LazyLoader';
