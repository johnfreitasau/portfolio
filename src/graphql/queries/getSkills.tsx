import { gql } from 'graphql-request';

import { graphQLClient } from '../../config/graphQLClient';
import { Skill } from '../schema';

const GET_SKILLS_QUERY = gql`
  query skills {
    skills {
      languageSkills
      frontendDevelopmentSkills
      backendDevelopmentSkills
      mobileDevelopmentSkills
      othersSkills
    }
  }
`;

export async function getSkills() {
  const { skills } = await graphQLClient.request(GET_SKILLS_QUERY);

  return skills as Array<Skill>;
}
