import { GraphQLPost, Post } from '@types';
import transformImage from './imageTransformer'

export const transformPost = (post: GraphQLPost): Post => ({
  ...post,
  coverImage: transformImage(post.coverImage)
})

export const transformPosts = (posts: GraphQLPost[]): Post[] => posts.map(transformPost)