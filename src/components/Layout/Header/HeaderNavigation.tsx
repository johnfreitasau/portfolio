import { Menu, MenuItem, MenuList,  } from '@chakra-ui/react';
import { navigationItems } from '../../../constants/navigation';
import { Link } from '../../Base/Link';

export function HeaderNavigation() {

  return (
    <>
      { navigationItems.map(({name, href}) =>
        <div key={name}>{name}</div>
      )}
      <Menu>
        <MenuList>
        { navigationItems.map(({name, href}) =>
          <Link
            key={name}
            href={href}
            // ='green.400'
            // _hover={{ textDecoration: 'none', color: 'green.400' }}
          >
            <MenuItem
              key={name}
              _focus={{ backgroundColor: 'none' }}
              _hover={{ backgroundColor: 'unset' }}
            >
              {name}
            </MenuItem>
          </Link>
        )}
        </MenuList>
      </Menu>
    </>
  )
}
