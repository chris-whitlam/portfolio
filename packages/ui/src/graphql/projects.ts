import { gql } from "@apollo/client";
import { Project } from "@types";
import { transformProject, transformProjects } from "@utils/transformers";
import apolloClient from "./apolloClient";

export const getProject = async (slug: string): Promise<Project> => {
   const { data: { projects } } = await apolloClient.query({
    query: gql`
      query {
        projects(where: {slug: "${slug}"}) {
          name
          slug
          tags
          summary
          images {
            alt
            image {
              url
              height
              width
            }
          }
          projectType
          demo
          sourceCode
          isApp
        }
      }
    `
  })

  return transformProject(projects[0])
}

export const getProjects = async (): Promise<Project[]> => {
  const { data: { projects } } = await apolloClient.query({
    query: gql`
      query {
        projects {
          name
          slug
          tags
          summary
          images {
            alt
            image {
              url
              height
              width
            }
          }
          projectType
          demo
          sourceCode
          isApp
        }
      }
    `
  })

  return transformProjects(projects);
}

export const getProjectPaths = async () => {
    const { data: { projects } } = await apolloClient.query({
    query: gql`
      query {
        projects {
          slug
        }
      }
    `
  })

  return projects.map((project: Project) => ({
    params: {
      slug: project.slug
    }
  }))
}