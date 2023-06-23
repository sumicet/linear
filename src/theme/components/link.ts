import { defineStyleConfig } from '@chakra-ui/react';

export const Link = defineStyleConfig({
    baseStyle: {
        transitionProperty: 'color',
    },
    variants: {
        solid: {
            textStyle: 'small',
            color: 'primary',
            _hover: {
                color: 'tertiary',
            },
            transitionDuration: 'regular',
        },
        ghost: {
            fontSize: '1.1em',
            color: 'tertiary',
            _hover: {
                color: 'primary',
            },
            transitionDuration: 'quick',
        },
    },
});
