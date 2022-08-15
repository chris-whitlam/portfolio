import { Image, GraphQLImage } from './image';

export type ProjectType = 'Personal' | 'Work';

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
  description: string;
  images: Image[];
}

export type Projects = Project[];

export interface GraphQLProject extends ProjectBase {
  description: {
    raw: string;
  };
  images: GraphQLImage[];
}
