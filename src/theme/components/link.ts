import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
    baseStyle: {
        transitionProperty: 'color',
    },
    variants: {
        solid: {
            textShadow: 'rgba(0, 0, 0, 0.3) 1px 1px 4px, rgba(0, 0, 0, 0.1) 2px 2px 4px',
            textAlign: 'center',
            color: 'primary',
            _hover: {
                color: 'tertiary',
            },
            transitionDuration: 'regular',
        },
        ghost: {
            color: 'tertiary',
            _hover: {
                color: 'primary',
            },
            transitionDuration: 'quick',
        },
    },
    sizes: {
        small: {
            textStyle: 'bodyS',
        },
        medium: {
            textStyle: 'bodyM',
        },
    },
});
