import React from 'react';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { Project } from '../Project';
// import { ProjectsListProps } from './types';

export function ProjectsList({ projects }) {
  return (
    <VStack width="full" spacing={5} id="projects">
      <Heading
        font-weight="700"
        fontSize={['1.5rem', '3.75rem']}
        letterSpacing="-.06em"
        as="h4"
        textAlign="center"
      >
        Some Projects
      </Heading>
      <Text lineHeigh="1.6" letterSpacing="-.02em" fontWeight="300">
        In this session you will find some of my projects shared on Github.
        Please, stop by and you will find much more: 😃
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="full">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
