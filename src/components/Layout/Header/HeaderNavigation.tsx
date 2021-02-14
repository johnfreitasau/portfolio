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
import { Link } from '../../Base/Link';

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
            <Link href={href}>{name}</Link>
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
                  <MenuItem value={name}>
                    <Link href={href}>
                      <ChevronRightIcon /> {name}
                    </Link>
                  </MenuItem>
                ))}
              </MenuOptionGroup>
            </MenuList>
          </>
        )}
      </Menu>
    </>
  );
}
