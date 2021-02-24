import { Link, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { Container } from './Layout/Container';

export const CTA = () => (
  <Container
    py={2}
    display="flex"
    justifyContent="center"
    justifyItems="center"
    marginBottom="7rem"
  >
    <Link
      href="#about"
      _hover={{
        textDecoration: 'none',
      }}
    >
      <Button
        bg="transparent"
        border="1px"
        w="150px"
        h="150px"
        _hover={{
          transform: 'rotateZ(90deg)',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
        }}
      >
        Discover more
        <ArrowForwardIcon />
      </Button>
    </Link>
  </Container>
);
