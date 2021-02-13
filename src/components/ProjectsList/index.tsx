import React from 'react';
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react';
import Project from '../Project';

export function ProjectsList({ projects }) {
  return (
    <VStack width="full" spacing={5}>
      <Heading as="h2" paddingTop={10} textAlign="center">
        Projects
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="full">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
