import { RichTextContent } from '@graphcms/rich-text-types';
import { Image, GraphQLImage } from './image';

interface PostBase {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  readTime: number;
}

export interface Post extends PostBase {
  content: RichTextContent;
  coverImage: Image;
}

export interface GraphQLPost extends PostBase {
  content: {
    raw: RichTextContent;
  };
  coverImage: GraphQLImage;
}
