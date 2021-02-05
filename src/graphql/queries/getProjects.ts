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
    stack
    stage
    title
    githubUrl
    description
  }
}
`;

export async function getProjects () {
  const { projects } = await graphQLClient.request(GET_PROJECTS_QUERY)

  return projects as Array<Project>
}
