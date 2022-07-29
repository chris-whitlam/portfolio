import { GraphQLPost, Post } from '@types';
import transformImage from './imageTransformer'

export const transformPost = (post: GraphQLPost): Post => ({
  ...post,
  coverImage: transformImage(post.coverImage),
  content: post.content?.raw ?? null
})

export const transformPosts = (posts: GraphQLPost[]): Post[] => posts.map(transformPost)