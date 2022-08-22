import dynamic from 'next/dynamic';

/* istanbul ignore file */

export const ProjectCard = dynamic(() => import('./ProjectCard/ProjectCard'));
export const PostCard = dynamic(() => import('./PostCard/PostCard'));
export const Carousel = dynamic(() => import('./Carousel/Carousel'));
export const SkillList = dynamic(() => import('./SkillList/SkillList'));
