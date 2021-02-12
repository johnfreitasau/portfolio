import React, { useMemo } from 'react';
import { ImGithub } from 'react-icons/im';
import {
  Link as ChakraLink,
  Badge,
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
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
          // <Box
          //   maxW="sm"
          //   borderRadius="lg"
          //   overflow="hidden"
          //   boxShadow="2xl"
          //   rounded="md"
          //   borderWidth="1px"
          //   borderColor="white"
          //   alignItems="flex-start"
          //   _hover={{
          //     boxShadow: 'none',
          //   }}
          //   // onClick={onOpen}
          // >
          //   <Box p="6">
          //     <Box
          //       mt="1"
          //       fontWeight="semibold"
          //       as="h4"
          //       lineHeight="tight"
          //       mb={3}
          //       isTruncated
          //     >
          //       {project.title}
          //       <ChakraLink
          //         isExternal
          //         href="https://github.com/johnfreitasau/gobarber-web"
          //       >
          //         <ImGithub />
          //       </ChakraLink>
          //     </Box>
          //     <Box d="flex" alignItems="baseline">
          //       {project.stack.categories.map((category) => (
          //         <Wrap spacing={1} marginBottom="auto">
          //           <WrapItem key={category.id}>
          //             <Badge
          //               borderRadius="full"
          //               px="2"
          //               colorScheme="teal"
          //               variant="subtle"
          //               mr={1}
          //             >
          //               {category.name}
          //             </Badge>
          //           </WrapItem>
          //         </Wrap>
          //       ))}
          //     </Box>

          //     <Box d="flex" mt="2" alignItems="center">
          //       <Box as="span" ml="2" color="gray.600" fontSize="sm">
          //         {project.description}
          //       </Box>
          //     </Box>
          //   </Box>
          // </Box>
        ))}
      </SimpleGrid>
    </VStack>
  );
}
