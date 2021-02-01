import React from "react";
import { useColorModeValue, Box, Heading, Flex, Text, Button } from '@chakra-ui/react';
import { HeaderNavigation } from './HeaderNavigation';
import hexToRgba from 'hex-to-rgba';
{/* <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
{children}
</Text> */}

export function Header() {

  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  const backgroundColor = useColorModeValue(
    // hexToRgba(colors.white[100], 0.5),
    // hexToRgba(colors.dark, 0.5)
    hexToRgba('#fff', 0.5),
    hexToRgba('#1A202C', 0.5)
  )

  return (
    <Flex
      as='header'
      top={0}
      css={{ backdropFilter: 'saturate(180%) blur(10px)' }}
      width='full'
      zIndex='docked'
      position='sticky'
      // direction='column'
      backgroundColor={backgroundColor}
      height="64px"
      borderBottom="0 -4px 0 0 red"

      // header-background: hsla(0,0%,100%,0.8);
      // header-border-bottom: inset 0 -1px 0 0 rgba(0,0,0,0.1);

    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          John Freitas
        </Heading>
      </Flex>

      {/* <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>

        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box> */}
      <Box
        // display={{ base: show ? "block" : "none", md: "flex" }}
        display={{ md: "flex" }}
        // width={{ base: "full", md: "auto" }}
        flexGrow={1}
        justifyContent="center"
      >
        <HeaderNavigation />
      </Box>

      <Box
        // display={{ base: show ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button bg="transparent" border="1px">
          Create account
        </Button>
      </Box>
      {/* <Flex direction="row">
      <nav>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Journal</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      </Flex> */}
      <div className="right">
        <a className="conf">
          {/* <img src="assets/special-button.svg" alt="Special button"/> */}
          <span>Special button</span>
        </a>

          {/* <img src="assets/avatar.svg" alt="Avatar"/>   */}
      </div>
    </Flex>
)}




