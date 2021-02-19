import { AccountCircle, Lock } from '@styled-icons/material';
import {
  Flex,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Image,
  keyframes,
  usePrefersReducedMotion,
  Collapse,
  Badge,
  Wrap,
  WrapItem,
  Center,
} from '@chakra-ui/react';
import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextDotJs,
  SiGraphql,
  SiApollographql,
  SiNodeDotJs,
  SiCss3,
  SiPostgresql,
  SiMicrosoftsqlserver,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiIcloud,
} from 'react-icons/si';
import { DiReact, DiNodejsSmall } from 'react-icons/di';

// import styled from 'styled-components';
import { Express } from '@styled-icons/simple-icons/Express';

import { Container } from '../components/Layout/Container';
import { CTA } from '../components/CTA';

import { ProjectsList } from '../components/ProjectsList';
import { GetStaticProps } from 'next';
import { getProjects } from '../graphql/queries/getProjects';
import { Link } from '../components/Base/Link';
import { useState } from 'react';

const animatedGradientTitle1 = keyframes`
  0%, 16.667%, 100% {
    opacity: 1;
  }

  33.333%, 83.333% {
    opacity: 0;
  }
`;

const animatedGradientTitle2 = keyframes`
	0%, 16.667%, 66.667%, 100% {
    opacity:0
  }

	33.333%, 50% {
		opacity: 1;
	}
`;

const animatedGradientTitle3 = keyframes`
	0%, 50%, 100% {
		opacity: 0;
	}

	66.667%, 83.333% {
		opacity: 1;
	}
`;

export default function Index({ projects }) {
  const [show, setShow] = useState(false);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const handleToggle = () => setShow(!show);

  const prefersReducedMotion = usePrefersReducedMotion();

  const heading1Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle1} 7s ease-in-out infinite`;

  const heading2Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle2} 7s ease-in-out infinite`;

  const heading3Animation = prefersReducedMotion
    ? undefined
    : `${animatedGradientTitle3} 7s ease-in-out infinite`;

  return (
    <Container id="home">
      <Button
        position="fixed"
        h="45px"
        w="45px"
        backgroundColor="brimson"
        right="50px"
        bottom="50px"
        ta="center"
        lh="45px"
        borderRadius="6px"
        cursor="pointer"
        pointer-event="none"
        transition="all 0.3s ease"
        onClick={scrollTop}
        z-index={1}
        // // bottom="0"
        // // width=100%;
        // height="auto"
        // // -webkit-transition: bottom 2s;
        // transition="bottom 2s"
        // bottom="0"
        // width: 100%;
      >
        <ChevronUpIcon />
      </Button>

      <Flex direction="column">
        <Stack
          spacing={6}
          alignItems="center"
          height="100vh"
          justifyContent="center"
        >
          <Heading
            bgGradient="linear(90deg, #007Cf0,#00DFD8)"
            bgClip="text"
            fontSize={['23vw', '8rem', '10rem']}
            lineHeight="1"
            fontWeight="bold"
            letterSpacing="-.06em"
            animation={heading1Animation}
          >
            Hello.
          </Heading>
          <Heading
            bgGradient="linear(90deg,#7928CA,#FF0080)"
            bgClip="text"
            fontSize={['23vw', '8rem', '10rem']}
            lineHeight="1"
            fontWeight="bold"
            letterSpacing="-.06em"
            animation={heading2Animation}
          >
            Welcome.
          </Heading>
          <Heading
            bgGradient="linear(90deg, #ff4d4d,#f9cb28)"
            bgClip="text"
            fontSize={['23vw', '8rem', '10rem']}
            lineHeight="1"
            fontWeight="bold"
            letterSpacing="-.06em"
            animation={heading3Animation}
            textAlign="right"
          >
            I'm John.
          </Heading>
          <CTA />
        </Stack>

        <Container
          id="about"
          justifyContent="center"
          paddingTop={20}
          marginBottom="7rem"
        >
          <div id="maxWidth">
            <Heading as="h2" textAlign="center" mb="50" id="about">
              About me
            </Heading>

            <Box
              p={4}
              display={{ md: 'flex' }}
              alignItems="center"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="2xl"
              rounded="md"
              borderWidth="1px"
              borderColor="white"
            >
              <Box flexShrink={0} display="flex" justifyContent="center">
                <Image
                  src="https://avatars.githubusercontent.com/u/44829778?s=460&u=d78ee0395a879c432ea3dbde78dfc3f9bb0d50ac&v=4"
                  alt="me"
                  // borderRadius="xl"
                  borderRadius="50%"
                  width={{ base: 500, sm: 400, md: 300 }}
                  // boxShadow="0 0 0 0.3em #918585"
                />
              </Box>
              <Box id="column-right" mt={{ base: 4, md: 0 }} ml={{ md: 5 }}>
                <Text fontWeight={600} fontSize="20px" marginTop="2rem">
                  Hello, my name is John Freitas
                </Text>
                <Text marginY=".700rem">
                  My life in the development field started early when I was 16
                  years old. I have delivered my first customer website at this
                  age.
                </Text>
                <Text marginY=".700rem">
                  As a programmer, I officially started my career in a
                  consulting company called{' '}
                  <Link
                    color="cyan.600"
                    fontWeight="700"
                    href="https://www.bsigroup.com/en-AU/"
                    isExternal
                  >
                    BSI
                  </Link>{' '}
                  to work on a project to restructure the Online Banking from
                  the largest private bank in Latin America called
                  <Link
                    color="cyan.600"
                    fontWeight="700"
                    href="https://www.itau.com/"
                    isExternal
                  >
                    {' '}
                    Itau
                  </Link>
                  .
                </Text>

                <Text marginY=".700rem">
                  After 5 months, right after we successfully completed the
                  second phase of the project, I was invited by this bank to
                  join one of their internal areas as Systems analyst. I
                  initially developed in Java and I got a lot of experience
                  along the way working on different technologies, projects and
                  systems departments for 7 years.
                </Text>
                <Text fontWeight={600} fontSize="20px" marginTop="2rem">
                  The change
                </Text>
                <Collapse startingHeight={30} in={show}>
                  <Text marginY=".700rem">
                    After 7 years at Itau, I decided that I wanted to experience
                    a life outside my country and I moved to Sydney - Australia,
                    where I met my wife and I had to make the big decision to
                    live in this country permanently.
                  </Text>
                  <Text marginY=".700rem">
                    My career in IT continued in Sydney. I started in a Cloud
                    Managed Services Provider company called{' '}
                    <Link
                      color="cyan.600"
                      fontWeight="700"
                      href="https://www.harbourit.com.au/"
                      isExternal
                    >
                      Harbour IT
                    </Link>{' '}
                    as a Systems engineer, then{' '}
                    <Link
                      color="cyan.600"
                      fontWeight="700"
                      href="https://www.canon.com.au/"
                      isExternal
                    >
                      Canon Group
                    </Link>{' '}
                    bought this company after a couple of years and today I have
                    been working for the Canon as a Senior Systems Engineer.
                    It's been 6 years working for this company now.
                  </Text>
                  <Text marginY=".700rem">
                    At Canon, I don't work as much as I used to with
                    development, however this is something that I am still
                    passionate about and work on it as a daily basis, creating
                    projects and contributing to the open source community.
                  </Text>
                </Collapse>
                <Button size="sm" onClick={handleToggle} mt="1rem">
                  Show {show ? 'Less' : 'More'}
                </Button>
              </Box>
            </Box>
          </div>
        </Container>

        <Container id="skills" justifyContent="center" paddingTop={20}>
          <Heading as="h2" textAlign="center" mb="50">
            Skills
          </Heading>
          <Text>
            My current stack is React (currently in love with NextJS), NodeJS
            and React Native. My favorite language is TypeScript.
          </Text>
          {/* <Box
            // maxW="sm"
            // overflow="hidden"
            boxShadow="2xl"
            rounded="xl"
            // alignItems="flex-start"
            // onClick={onOpen}
            cursor="pointer"
            _hover={{ opacity: 1, transform: 'scale(1.02)' }}
            transition="all 0.3s ease"
            opacity="0.8"
            w="150px"
            h="150px"
          > */}
          <Wrap justifySelf="center">
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiReact size={50} />
                <Text>React</Text>
              </Box>
            </WrapItem>

            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiNextDotJs size={50} />
                <Text>Next.js</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{
                  opacity: 1,
                  transform: 'scale(1.02)',
                }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiCss3 size={50} />
                <Text>CSS3</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <Express size={50} />
                <Text>Express</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiGraphql size={50} />
                <Text>GraphQL</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiApollographql size={50} />

                <Text>Apollo GraphQL</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiNodeDotJs size={50} />
                <Text>Node.js</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <DiReact size={50} />
                <Text>React Native</Text>
              </Box>
            </WrapItem>
          </Wrap>
          <Text mt="3rem">Current languages:</Text>
          <Wrap>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiTypescript size={50} />
                <Text>TypeScript</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiJavascript size={50} />
                <Text>JavaScript</Text>
              </Box>
            </WrapItem>
          </Wrap>
          <Text mt="3rem">Others:</Text>
          <Wrap>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiPostgresql size={50} />
                <Text>PostgreSQL</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiMysql size={50} />
                <Text>MySQL</Text>
              </Box>
            </WrapItem>

            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiMicrosoftsqlserver size={50} />
                <Text>MS SQL Server</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiRedis size={50} />
                <Text>Redis</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiMongodb size={50} />
                <Text>MongoDB</Text>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box
                d="flex"
                // mt="2"
                alignItems="center"
                justifyContent="center"
                justifySelf="center"
                verticalAlign="center"
                alignSelf="center"
                textAlign="center"
                alignContent="center"
                flexDir="column"
                // maxW="sm"
                // overflow="hidden"
                boxShadow="2xl"
                rounded="xl"
                // alignItems="flex-start"
                // onClick={onOpen}
                cursor="pointer"
                _hover={{ opacity: 1, transform: 'scale(1.02)' }}
                transition="all 0.3s ease"
                opacity="0.8"
                w="150px"
                h="150px"
              >
                <SiIcloud size={50} />
                <Text>Cloud Services</Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Container>

        <Container id="projects" justifyContent="center" paddingTop={20}>
          <ProjectsList projects={projects} />
        </Container>
      </Flex>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();

  return {
    props: {
      projects,
    },
  };
};

// SiPostgresql,
// SiMysql,
// ,
//SiMongodb
