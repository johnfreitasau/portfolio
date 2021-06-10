import React from 'react';
import { Heading, SimpleGrid, VStack, Text, Tooltip } from '@chakra-ui/react';
import { Project } from '../Project';
import { ProjectsListProps } from './types';
import { InfoOutlineIcon } from '@chakra-ui/icons';

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
        Here you will find some of my public repositories available on GitHub,
        including this portfolio.{' '}
        <Tooltip
          hasArrow
          label="To find out more about other public repositories created on GitHub, please visit my GitHub profile. 😃"
          size="sm"
          placement="left"
        >
          <InfoOutlineIcon w={4} h={4} color="gray.400" />
        </Tooltip>
      </Text>

      <SimpleGrid columns={[1, null, 2]} spacing={10} width="full">
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}
