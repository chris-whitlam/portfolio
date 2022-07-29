import { GraphQLProject, Project } from '@types';
import transformImage from './imageTransformer'

export const transformProject = (project: GraphQLProject): Project => ({
  ...project,
  images: project.images.map(transformImage),
  description: project.description.raw
})

export const transformProjects = (projects: GraphQLProject[]): Project[] => projects.map(transformProject);