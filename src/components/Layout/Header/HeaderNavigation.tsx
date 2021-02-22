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

import {
  HamburgerIcon,
  ChevronRightIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons';

import { navigationItems } from '../../../constants/navigation';
import { Link } from '@chakra-ui/react';

export function HeaderNavigation() {
  return (
    <>
      <HStack
        as="ul"
        spacing={4}
        css={{ listStyle: 'none' }}
        display={['none', null, 'flex']}
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
              display={['flex', null, 'none']}
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
                  >
                    <MenuItem value={name}>
                      <ChevronRightIcon /> {name}
                    </MenuItem>
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
