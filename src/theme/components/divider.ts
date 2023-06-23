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
        solid: {
            bg: 'divider',
        },
    },
    defaultProps: {
        variant: 'solid',
    },
});
