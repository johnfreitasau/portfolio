import { InfoOutlineIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
  Tooltip,
} from '@chakra-ui/react';
import { Express } from '@styled-icons/simple-icons/Express';
import { Jamstack } from '@styled-icons/simple-icons/Jamstack';
import React from 'react';
import { CustomBox } from './CustomBox';
import { SkillsProps } from './types';

export function Skills({ skills }: SkillsProps) {
  return (
    <VStack id="skills" paddingTop={20} alignItems="left">
      <Heading
        fontWeight="bold"
        fontSize={['1.5rem', '3.75rem']}
        letterSpacing="-.06em"
        as="h4"
        textAlign="center"
      >
        Skills
      </Heading>
      <Text
        lineHeight="1.6"
        letterSpacing="-.02em"
        fontWeight="300"
        align="center"
      >
        Languages, libraries, frameworks and other tools used on my projects
      </Text>

      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letterSpacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        LANGUAGES
      </Text>
      <Wrap justify="center">
        {skills[0]?.languageSkills?.map((language) => (
          <WrapItem key={language.id}>
            <Center>
              <CustomBox
                stackName={language.name}
                iconName={language.icon}
                color={language.color}
                key={language.id}
                size={50}
              />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letterSpacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        FRONT-END DEVELOPMENT
      </Text>
      <Wrap justify="center">
        {skills[0]?.frontendDevelopmentSkills?.map((skill) => (
          <WrapItem key={skill.id}>
            <Center>
              <CustomBox
                stackName={skill.name}
                iconName={skill.icon}
                color={skill.color}
                key={skill.id}
                size={50}
              />
            </Center>
          </WrapItem>
        ))}
        <Box
          d="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          boxShadow="2xl"
          rounded="xl"
          _hover={{ opacity: 1, transform: 'scale(1.02)' }}
          transition="all 0.5s ease"
          opacity="0.7"
          w="150px"
          h="150px"
          marginX="5px"
        >
          <Jamstack size={50} />
          <Text>Jamstack</Text>
        </Box>
      </Wrap>
      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letterSpacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        BACK-END DEVELOPMENT
      </Text>
      <Wrap justify="center">
        {skills[0]?.backendDevelopmentSkills?.map((skill) => (
          <WrapItem key={skill.id}>
            <Center>
              <CustomBox
                stackName={skill.name}
                iconName={skill.icon}
                color={skill.color}
                key={skill.id}
                size={50}
              />
            </Center>
          </WrapItem>
        ))}
        {/* Requested to add a new icon for Express #417 opened
          https://github.com/react-icons/react-icons/issues/417
           */}
        <Box
          d="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          boxShadow="2xl"
          rounded="xl"
          _hover={{ opacity: 1, transform: 'scale(1.02)' }}
          transition="all 0.5s ease"
          opacity="0.7"
          w="150px"
          h="150px"
          marginX="5px"
        >
          <Express size={50} />
          <Text>Express</Text>
        </Box>
      </Wrap>
      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letterSpacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        MOBILE DEVELOPMENT
        <Tooltip
          hasArrow
          label="Most of the libraries used on the Front-end development are used on the mobile development."
          size="md"
        >
          <InfoOutlineIcon w={4} h={4} color="gray.400" />
        </Tooltip>
      </Text>
      <Wrap justify="center">
        {skills[0]?.mobileDevelopmentSkills?.map((skill) => (
          <WrapItem key={skill.id}>
            <Center>
              <CustomBox
                stackName={skill.name}
                iconName={skill.icon}
                color={skill.color}
                key={skill.id}
                size={50}
              />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letterSpacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        DATABASES, PLATFORMS AND OTHERS
      </Text>
      <Wrap justify="center">
        {skills[0]?.othersSkills?.map((other) => (
          <WrapItem key={other.id}>
            <Center>
              <CustomBox
                stackName={other.name}
                iconName={other.icon}
                color={other.color}
                key={other.id}
                size={50}
              />
            </Center>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
}
