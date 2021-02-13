import { HStack } from '@chakra-ui/react';
import { navigationItems } from '../../../constants/navigation';
import { Link } from '../../Base/Link';

export function HeaderNavigation() {
  return (
    <>
      <HStack as="ul" spacing={4} css={{ listStyle: 'none' }}>
        {navigationItems.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}>{name}</Link>
          </li>
        ))}
      </HStack>
    </>
  );
}
