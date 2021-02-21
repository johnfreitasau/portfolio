import {
  VStack,
  Heading,
  Box,
  Image,
  Text,
  Link,
  Collapse,
  Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { externalLinks } from '../../constants/externalLinks';

export function About() {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <VStack paddingTop={20} id="about">
      <Heading
        font-weight="700"
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
        // borderRadius="xl"
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
            old. I have delivered my first customer website at this age.
          </Text>
          <Text marginY=".700rem">
            As a programmer, I officially started my career in a consulting
            company called{' '}
            <Link
              color="cyan.600"
              fontWeight="700"
              href={externalLinks.bsi}
              isExternal
            >
              BSI
            </Link>{' '}
            to work on a project to restructure the Online Banking from the
            largest private bank in Latin America called
            <Link
              color="cyan.600"
              fontWeight="700"
              href={externalLinks.itau}
              isExternal
            >
              {' '}
              Itau
            </Link>
            .
          </Text>

          <Text marginY=".700rem">
            After 5 months, right after we successfully completed the second
            phase of the project, I was invited by this bank to join one of
            their internal areas as Systems analyst. I initially developed in
            Java and I got a lot of experience along the way working on
            different technologies, projects and systems departments for 7
            years.
          </Text>
          <Text fontWeight={600} fontSize="20px" marginTop="2rem">
            The change
          </Text>
          <Collapse startingHeight={30} in={show}>
            <Text marginY=".700rem">
              After 7 years at Itau, I decided that I wanted to experience a
              life outside my country and I moved to Sydney - Australia, where I
              met my wife and I had to make the big decision to live in this
              country permanently.
            </Text>
            <Text marginY=".700rem">
              My career in IT continued in Sydney. I started in a Cloud Managed
              Services Provider company called{' '}
              <Link
                color="cyan.600"
                fontWeight="700"
                href={externalLinks.harbourit}
                isExternal
              >
                Harbour IT
              </Link>{' '}
              as a Systems engineer, then{' '}
              <Link
                color="cyan.600"
                fontWeight="700"
                href={externalLinks.canon}
                isExternal
              >
                Canon Group
              </Link>{' '}
              bought this company after a couple of years and today I have been
              working for the Canon as a Senior Systems Engineer. It's been 6
              years working for this company now.
            </Text>
            <Text marginY=".700rem">
              At Canon, I don't work as much as I used to with development,
              however this is something that I am still passionate about and
              work on it as a daily basis, creating projects and contributing to
              the open source community.
            </Text>
          </Collapse>
          <Button size="sm" onClick={handleToggle} mt="1rem">
            Show {show ? 'Less' : 'More'}
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
