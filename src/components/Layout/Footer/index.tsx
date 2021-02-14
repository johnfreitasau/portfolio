import {
  VStack,
  Box,
  Heading,
  Text,
  HStack,
  useColorMode,
  Link,
} from '@chakra-ui/react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';

export function Footer() {
  const { colorMode } = useColorMode();

  const bgColor = { light: '#fafafa', dark: '#111' };

  return (
    <Box
      backgroundColor={bgColor[colorMode]}
      borderTopWidth={1}
      marginTop="50px"
    >
      <VStack margin="2rem">
        <Heading
          size=".875rem"
          width="100%"
          fontWeight={400}
          textAlign="center"
        >
          Connect with me on
          <Box width="100%" marginBottom=".876rem">
            <HStack spacing={5} justifyContent="center">
              <Link
                href="https://au.linkedin.com/in/john-freitas-368449191"
                isExternal
                _hover={{ color: '#fff', stroke: 'tomato' }}
              >
                <AiFillLinkedin size="1.475rem" />
              </Link>

              <Link
                href="https://github.com/johnfreitasau"
                isExternal
                _hover={{ color: '#fff', stroke: 'tomato' }}
              >
                <AiOutlineGithub size="1.475rem" />
              </Link>

              <Link
                href="https://twitter.com/jfcfreitas"
                isExternal
                _hover={{ color: '#fff', stroke: 'tomato' }}
              >
                <AiOutlineTwitter size="1.475rem" />
              </Link>
            </HStack>
          </Box>
          <Text fontWeight={200} marginTop="0.876rem">
            © 2021 John Freitas
          </Text>
        </Heading>
      </VStack>
    </Box>
  );
}
