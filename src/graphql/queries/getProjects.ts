import { gql } from 'graphql-request';

import { graphQLClient } from '../../config/graphQLClient';
import { Project } from '../schema';



const GET_PROJECTS_QUERY = gql`
query projects {
  projects {
    id
    image
    liveUrl
    publishedAt

    stage
    title
    githubUrl
    description
    stack {
      id
      framework
      categories {
        id
        name
      }
    }
  }
}
`;

export async function getProjects () {
  const { projects } = await graphQLClient.request(GET_PROJECTS_QUERY)

  return projects as Array<Project>
}
