import { Badge, Box, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react';

import ProjectModal from './ProjectModal';

export default function Project({ project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      <Box
        maxW="sm"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="2xl"
        rounded="md"
        borderWidth="1px"
        borderColor="white"
        alignItems="flex-start"
        _hover={{
          boxShadow: 'none',
        }}
        onClick={onOpen}
        cursor="pointer"
      >
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
          </Box>
          <Box d="flex" alignItems="baseline">
            {project.stack.categories.map((category) => (
              <Wrap spacing={1} marginBottom="auto">
                <WrapItem key={category.id}>
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="teal"
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
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
