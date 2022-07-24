import { Image, GraphQLImage } from '.';

type ProjectType = 'Personal' | 'Work';

interface ProjectBase {
  name: string;
  slug: string;
  tags: string[];
  summary: string;
  projectType: ProjectType;
  demo: string;
  sourceCode: string;
  isApp: boolean;
}

export interface Project extends ProjectBase {
  images: Image[];
}

export type Projects = Project[];

export interface GraphQLProject extends ProjectBase {
  images: GraphQLImage[];
}