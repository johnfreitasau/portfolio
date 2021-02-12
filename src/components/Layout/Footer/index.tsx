import { VStack, Box, Heading, Flex } from '@chakra-ui/react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { Container } from '../Container';

export function Footer() {
  return (
    <Flex width="full" direction="column">
      <Container>
        <VStack
          as="footer"
          width="full"
          spacing={4}
          paddingY={8}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            as="footer"
            // bottom={0}

            // width="full"
            // zIndex="docked"
            // position="sticky"
            // height="64px"
            // flexShrink={0}
            // width="full"
            // marginTop="auto"
            // direction="column"
            // borderTopWidth={1}
            // css={{ background: '#6e6b6b' }}
          >
            <Box borderTopWidth={1} display="flex" width="full">
              <Flex align="center" mr={5}>
                <Heading
                  pl={3}
                  letterSpacing={'-.1rem'}
                  size="xs"
                  width="100%"
                  maxWidth={420}
                  textAlign="center"
                >
                  Let's keep in touch
                  <AiFillLinkedin />
                  <AiOutlineGithub />
                  <AiOutlineTwitter />
                </Heading>
              </Flex>

              <Box
                display={{ md: 'flex' }}
                flexGrow={1}
                justifyContent="center"
              ></Box>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Flex>
  );
}
