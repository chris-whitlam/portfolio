import { RichTextContent } from '@graphcms/rich-text-types';
import { Image, GraphQLImage } from './image';

export interface Socials {
  githubUrl: string;
  linkedInUrl: string;
  email: string;
}

interface ProfileBase {
  name: string;
  roles: string[];
  socials: Socials;
}

export interface Profile extends ProfileBase {
  bio: RichTextContent;
  image: Image;
}

export interface GraphQLProfile extends ProfileBase {
  bio: {
    raw: RichTextContent;
  };
  image: GraphQLImage;
}
