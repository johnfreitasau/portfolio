import { Box, Heading, Link, Text, VStack, HStack } from '@chakra-ui/react';
import { Express } from '@styled-icons/simple-icons/Express';
import React from 'react';
import { externalLinks } from '../../constants/externalLinks';
import { CustomBox } from './CustomBox';
// import { SkillsProps } from './types';

export function Skills({ skills }: any) {
  // export function Skills({ skills }: Array<SkillsProps>) {
  return (
    <VStack id="skills" paddingTop={20} alignItems="left">
      <Heading
        font-weight="700"
        fontSize={['1.5rem', '3.75rem']}
        letterSpacing="-.06em"
        as="h4"
        textAlign="center"
      >
        Skills
      </Heading>
      <Text lineHeigh="1.6" letterSpacing="-.02em" fontWeight="300">
        The stack I'm currently focused on is{' '}
        <Link
          color="black.600"
          fontWeight="700"
          href={externalLinks.nextjs}
          isExternal
          _hover={{ opacity: 0.5 }}
        >
          React
        </Link>{' '}
        (in love with{' '}
        <Link
          color="black.600"
          fontWeight="700"
          href={externalLinks.nextjs}
          isExternal
          _hover={{ opacity: 0.5 }}
        >
          Next.js
        </Link>
        ),{' '}
        <Link
          color="black.600"
          fontWeight="700"
          href={externalLinks.nextjs}
          isExternal
          _hover={{ opacity: 0.5 }}
        >
          Node.js
        </Link>{' '}
        and{' '}
        <Link
          color="black.600"
          fontWeight="700"
          href={externalLinks.nextjs}
          isExternal
          _hover={{ opacity: 0.5 }}
        >
          React Native
        </Link>
        . See more details below.
      </Text>

      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letter-spacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        MOST USED STACKS
      </Text>
      {/* <Wrap
        justify="center"
        width="full"
        spacing={1}
        direction="column"
        alignItems="start"
      > */}

      <HStack display="flex" flexWrap="wrap" justifyContent="center">
        {skills[0]?.detailedSkills?.map((skill) => (
          // <WrapItem>
          <CustomBox
            stackName={skill.name}
            iconName={skill.icon}
            color={skill.color}
            size={50}
          />
          // </WrapItem>
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
      </HStack>
      {/* </Wrap> */}

      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letter-spacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        FAVORITE LANGUAGES
      </Text>

      {/* <Wrap justify="center"> */}
      {/* <WrapItem> */}
      <HStack display="flex" flexWrap="wrap" justifyContent="center">
        {skills[0]?.languageSkills?.map((language) => (
          <CustomBox
            stackName={language.name}
            iconName={language.icon}
            color={language.color}
            size={50}
          />
        ))}
      </HStack>
      {/* </WrapItem> */}
      {/* </Wrap> */}

      <Text
        mt="3rem"
        as="h3"
        fontSize="0.75rem"
        fontWeight="bold"
        letter-spacing="0.2rem"
        textAlign="center"
        paddingTop="3rem"
      >
        OTHERS
      </Text>

      <HStack display="flex" flexWrap="wrap" justifyContent="center">
        {/* <Wrap justify="center"> */}
        {/* <WrapItem> */}
        {skills[0]?.otherSkills?.map((other) => (
          <CustomBox
            stackName={other.name}
            iconName={other.icon}
            color={other.color}
            size={50}
          />
        ))}
        {/* </WrapItem> */}
        {/* </Wrap> */}
      </HStack>
    </VStack>
  );
}
