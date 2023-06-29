import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

/**
 * A `chakra-ui` `Link` component that extends `next.js`'s `Link`.
 */
export function Link(props: LinkProps & NextLinkProps) {
    return <ChakraLink {...props} as={NextLink} />;
}
