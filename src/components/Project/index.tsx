import {
  Badge,
  Box,
  Image,
  useDisclosure,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { isThisYear } from 'date-fns';
import { useMemo } from 'react';
import { ProjectModal } from './ProjectModal';

export function Project({ project }) {
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
        _hover={{ opacity: 1, transform: 'scale(1.02)' }}
        transition="all 0.3s ease"
        opacity="0.8"
      >
        <Image
          src={project.image?.thumbnailUrl}
          alt={project.image?.imageAlt}
          transition="0.5s"
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
            {project.stacks.map((stack) => (
              <Wrap spacing={1} marginBottom="auto">
                <WrapItem key={stack.id}>
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme="blue"
                    variant="subtle"
                    mr={1}
                  >
                    {stack.name}
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
