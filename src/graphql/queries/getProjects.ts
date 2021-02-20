import { gql } from 'graphql-request';

import { graphQLClient } from '../../config/graphQLClient';
import { Project } from '../schema';

const GET_PROJECTS_QUERY = gql`
  query projects {
    projects(orderBy: publishedDate_DESC) {
      id
      liveUrl
      publishedAt
      stage
      title
      githubUrl
      description
      image
      publishedDate
      language
      frontendStackDetails
      backendStackDetails
      mobileStackDetails
      stacks {
        id
        name
      }
    }
  }
`;

export async function getProjects() {
  const { projects } = await graphQLClient.request(GET_PROJECTS_QUERY);

  return projects as Array<Project>;
}
