import { Post } from "@types";
import { getPosts } from "@graphql";
import { Box } from "@mui/material";
import { FC } from "react";
import { PostCard } from "@molecules";
import { BackLink, PageTitle } from "@atoms";

interface BlogPageProps {
  posts: Post[]
}

const BlogPage: FC<BlogPageProps> = ({ posts }) => {

  return (
    <Box>
      <BackLink />
      <PageTitle>Blog Posts</PageTitle>
      <Box>
        {posts.map(post => <PostCard key={post.title} post={post} />)}
      </Box>
    </Box>
  )
}


export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}

export default BlogPage;