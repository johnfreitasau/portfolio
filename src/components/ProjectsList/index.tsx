import React from 'react';
import { Heading, SimpleGrid, VStack, Text } from '@chakra-ui/react';
import { Project } from '../Project';
import { ProjectsListProps } from './types';

export function ProjectsList({ projects }: ProjectsListProps) {
  return (
    <VStack width="full" spacing={5} id="projects">
      <Heading
        fontWeight="bold"
        fontSize={['1.5rem', '3.75rem']}
        letterSpacing="-.06em"
        as="h4"
        textAlign="center"
      >
        GitHub Projects
      </Heading>
      <Text lineHeight="1.6" letterSpacing="-.02em" fontWeight="300">
        Here you will find some of my projects that I developed and are
        currently available on GitHub. This portfolio is also part of one of the
        projects I have been working on. 😃
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="full">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
