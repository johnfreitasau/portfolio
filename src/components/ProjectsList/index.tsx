import React, { useMemo } from 'react';
import { ImGithub } from 'react-icons/im';
import {
  Link as ChakraLink,
  Badge,
  Box,
  Heading,
  Popover,
  SimpleGrid,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { ProjectsListProps } from './types';
import { InfoIcon, LinkIcon, StarIcon, git } from '@chakra-ui/icons';
import { GraphQLClient } from 'graphql-request';
import { GetStaticProps } from 'next';
import { isCompositeType } from 'graphql';

import { Project } from '../../graphql/schema';

// export function ProjectsList ({projects = [{name: 'john'}]}: ProjectsListProps) {
//   console.log('Projects page')
//   return (

//   )
// }

export function ProjectsList({ projects }) {
  // console.log('PROJECTS_UNDER_PROJECTSLIST:', projects);

  const property = {
    imageUrl: 'https://bit.ly/2Z4KKcF',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <VStack
      width="full"
      spacing={5}
      // alignItems='flex-start'
    >
      <Heading as="h2" paddingTop={10} textAlign="center">
        Projects
        {/* <Popover
      // popoverText={popoverText}
      buttonContent={<InfoIcon boxSize={5} color='green.400' />}
    /> */}
      </Heading>
      <SimpleGrid columns={[1, null, 2]} spacing={10} width="full">
        {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden"> */}
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}

        {/**/}
        {projects.map((project) => (
          <Box
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="2xl"
            rounded="md"
            borderWidth="1px"
            borderColor="white"
            alignItems="flex-start"
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
                <ChakraLink
                  isExternal
                  href="https://github.com/johnfreitasau/gobarber-web"
                  // flexGrow={1}
                  // mr={2}
                >
                  <ImGithub />
                </ChakraLink>
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
              {/* <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box> */}

              {/* <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box> */}

              <Box d="flex" mt="2" alignItems="center">
                {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))} */}
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  {project.description}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
        {/* <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            FRONTEND
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box> */}
        {/* </Box> */}
        {/**/}

        {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            FRONTEND
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box> */}

        {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            FRONTEND
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box> */}

        {/* <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            FRONTEND
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box> */}
      </SimpleGrid>
    </VStack>
  );
}
