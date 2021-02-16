import {
  Badge,
  Box,
  Wrap,
  WrapItem,
  useDisclosure,
  Image,
} from '@chakra-ui/react';

import ProjectModal from './ProjectModal';

export default function Project({ project }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
      <Box
        maxW="sm"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="2xl"
        rounded="md"
        borderColor="white"
        alignItems="flex-start"
        onClick={onOpen}
        cursor="pointer"
      >
        <Image
          src={project.image?.thumbnailUrl}
          alt={project.image?.imageAlt}
          opacity="0.5"
          transition="0.5s"
          // backgroundPosition="-100px -100px"
          // width="500px"
          // height="200px"
          _hover={{ opacity: 1 }}
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
            <Badge ml="1" fontSize="0.8em" colorScheme="green">
              New
            </Badge>
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
              {/* {project.publishedAt} */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
