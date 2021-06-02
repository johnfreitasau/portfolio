import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react';

import { HamburgerIcon, SmallCloseIcon } from '@chakra-ui/icons';

import { navigationItems } from '../../../constants/navigation';
import { Link } from '@chakra-ui/react';

export function HeaderNavigation() {
  return (
    <>
      <HStack
        as="ul"
        spacing={4}
        css={{ listStyle: 'none' }}
        display={['none', 'none', 'flex']}
        ml="auto"
        mr="1rem"
      >
        {navigationItems.map(({ name, href }) => (
          <li key={name}>
            <Link href={href} _hover={{ color: '#666' }}>
              {name}
            </Link>
          </li>
        ))}
      </HStack>
      <Menu closeOnSelect={false}>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              colorScheme="gray"
              display={[null, null, 'none']}
            >
              {isOpen ? <SmallCloseIcon boxSize="1em" /> : <HamburgerIcon />}
            </MenuButton>
            <MenuList minWidth="240px">
              <MenuOptionGroup defaultValue="asc" title="Menu">
                <MenuDivider />
                {navigationItems.map(({ name, href }) => (
                  <Link
                    href={href}
                    _hover={{ textDecoration: 'none' }}
                    key={name}
                    textDecoration="none"
                  >
                    <MenuItem value={name}>{name}</MenuItem>
                  </Link>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}
