// import { useState } from 'react';
import {
  Badge,
  Box,
  Wrap,
  WrapItem,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { isThisYear } from 'date-fns';

import ProjectModal from './ProjectModal';

export default function Project({ project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const wasPublishedThisYear = useMemo(() => {
    return isThisYear(new Date(project.publishedDate));
  }, []);

  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      <Box
        maxW="sm"
        overflow="hidden"
        boxShadow="2xl"
        rounded="xl"
        alignItems="flex-start"
        onClick={onOpen}
        cursor="pointer"
      >
        <Image
          src={project.image?.thumbnailUrl}
          alt={project.image?.imageAlt}
          opacity="0.5"
          transition="0.5s"
          _hover={{ opacity: 1 }}
          margin="auto"
          display="block"
        />
        <Box p="6">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            mb={3}
            isTruncated
          >
            {project.title}
            {wasPublishedThisYear && (
              <>
                <Badge ml="1" fontSize="0.8em" colorScheme="green">
                  New
                </Badge>
              </>
            )}
          </Box>
          <Box d="flex" alignItems="baseline">
            {project.stack.categories.map((category) => (
              <Wrap spacing={1} marginBottom="auto">
                <WrapItem key={category.id}>
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="blue"
                    variant="subtle"
                    mr={1}
                  >
                    {category.name}
                  </Badge>
                </WrapItem>
              </Wrap>
            ))}
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {project.description}
              <br />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
