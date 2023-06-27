import { defineStyleConfig } from '@chakra-ui/react';

export const Divider = defineStyleConfig({
    baseStyle: props => {
        if (props.orientation === 'vertical') {
            return {
                borderLeftWidth: 0,
                width: '1px',
            };
        } else {
            return {
                borderBottomWidth: 0,
                height: '1px',
            };
        }
    },
    variants: {
        ghost: {
            bg: 'rgba(255, 255, 255, 0.08)',
        },
        solid: {
            bg: 'rgb(34, 35, 38)',
        },
    },
    defaultProps: {
        variant: 'ghost',
    },
});
