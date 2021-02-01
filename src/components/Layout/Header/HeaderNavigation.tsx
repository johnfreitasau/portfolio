import { Menu, MenuItem, MenuList, HStack  } from '@chakra-ui/react';
import { navigationItems } from '../../../constants/navigation';
import { Link } from '../../Base/Link';

export function HeaderNavigation() {

  return (
    <>
      <HStack
        as='ul'
        // display={['none', null, 'flex']}
        spacing={4}
        css={{ listStyle: 'none' }}
      >
        {
          navigationItems.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))
        }
      </HStack>

      {/* { navigationItems.map(({name, href}) =>
        <div key={name}>{name}</div>
      )}
      <Menu>
        <MenuList borderSize="1" borderColor="red">
        { navigationItems.map(({name, href}) =>
          <Link
            key={name}
            href={href}
            // ='green.400'
            // _hover={{ textDecoration: 'none', color: 'green.400' }}
          >
            <MenuItem
              key={name}
              borderSize="1" borderColor="red"
              _focus={{ backgroundColor: 'none' }}
              _hover={{ backgroundColor: 'unset' }}
            >
              {name}
            </MenuItem>
          </Link>
        )}
        </MenuList>
      </Menu> */}
    </>
  )
}
