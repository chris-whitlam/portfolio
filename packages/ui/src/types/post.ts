import { Image, GraphQLImage } from './image';

interface PostBase {
  title: string;
  slug: string;
  content: any;
  date: string;
  tags: string[];
  readTime: number;
}

export interface Post extends PostBase {
  coverImage: Image;
}

export interface GraphQLPost extends PostBase {
  coverImage: GraphQLImage;
}
