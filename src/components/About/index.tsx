import {
  Box,
  Button,
  Collapse,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { externalLinks } from '../../constants/externalLinks';

export function About() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <VStack paddingTop={20} id="about">
      <Heading
        fontWeight="bold"
        fontSize={['1.5rem', '3.75rem']}
        letterSpacing="-.06em"
        as="h4"
        textAlign="center"
      >
        About me
      </Heading>

      <Box
        p={4}
        display={{ md: 'flex' }}
        alignItems="center"
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
            borderRadius="50%"
            width={{ base: 500, sm: 400, md: 300 }}
          />
        </Box>
        <Box id="column-right" mt={{ base: 4, md: 0 }} ml={{ md: 5 }}>
          <Text fontWeight={600} fontSize="20px" marginTop="2rem">
            Hello, my name is John Freitas
          </Text>
          <Text marginY=".700rem">
            My life in the development field started early when I was 16 years
            old. I delivered my first customer website at this age.
          </Text>
          <Text marginY=".700rem">
            As a developer, I officially started my career in a consulting
            company called{' '}
            <Link
              color="cyan.600"
              fontWeight="700"
              href={externalLinks.bsi}
              _hover={{ opacity: 0.5 }}
              isExternal
            >
              BSI
            </Link>{' '}
            working on a project restructuring Online Banking for the largest
            private bank in Latin America called
            <Link
              color="cyan.600"
              fontWeight="700"
              href={externalLinks.itau}
              _hover={{ opacity: 0.5 }}
              isExternal
            >
              {' '}
              Itau
            </Link>
            .
          </Text>

          <Text marginY=".700rem">
            After 5 months, right after we successfully completed the first
            phase of the project, I was invited by Itau to join one of their
            internal areas as Systems analyst. I initially developed in Java and
            I got a lot of experience along the way working on different
            technologies, projects and systems departments over 6 years.
          </Text>
          <Text fontWeight={600} fontSize="20px" marginTop="2rem">
            The change
          </Text>
          <Collapse startingHeight={30} in={show}>
            <Text marginY=".700rem">
              After a long time working at Itau, I made the hard decision to
              leave my country temporarily to study overseas and have a new life
              experience. I moved to Sydney, where I met my wife and had to make
              another hard decision which was to live in this country
              permanently.
            </Text>
            <Text marginY=".700rem">
              My career in IT continued in Sydney. I started in a Cloud Managed
              Services Provider company called{' '}
              <Link
                color="cyan.600"
                fontWeight="700"
                href={externalLinks.harbourit}
                _hover={{ opacity: 0.5 }}
                isExternal
              >
                Harbour IT
              </Link>{' '}
              as a Systems engineer. Then{' '}
              <Link
                color="cyan.600"
                fontWeight="700"
                href={externalLinks.canon}
                _hover={{ opacity: 0.5 }}
                isExternal
              >
                Canon Group
              </Link>{' '}
              bought the company after a couple of years and now I work for
              Canon as a Senior Systems engineer. I have been working for this
              company for over 6 years now.
            </Text>
            <Text marginY=".700rem">
              Although I do not work with software development as much as I used
              to in my current job, it is an area I am still passionate about
              and I work on it on a daily basis through creating projects and
              contributing to the open source community.
            </Text>
          </Collapse>
          <VStack>
            <Button size="sm" onClick={handleToggle} mt="1rem">
              Show {show ? 'Less' : 'More'}
            </Button>
          </VStack>
        </Box>
      </Box>
    </VStack>
  );
}
