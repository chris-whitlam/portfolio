import { Image, GraphQLImage } from './image';

export interface Socials {
  githubUrl: string;
  linkedInUrl: string;
  email: string;
}

interface ProfileBase {
  name: string;
  roles: string[];
  bio: string;
  socials: Socials;
}

export interface Profile extends ProfileBase {
  image: Image;
}

export interface GraphQLProfile extends ProfileBase {
  image: GraphQLImage;
}
