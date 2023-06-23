import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: 9999,
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    variants: {
        gradient: {
            background:
                'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
            _hover: {
                textShadow: 'rgba(0, 0, 0, 0.56) 0px 3px 12px',
                boxShadow: 'rgba(80, 63, 205, 0.5) 0px 1px 40px',
            },
        },
    },
    sizes: {
        small: {
            height: 'space32',
            paddingX: 'space16',
            textStyle: 'small',
        },
        medium: {
            height: 'space48',
            paddingX: 'space24',
        },
    },
    defaultProps: {
        size: 'medium',
        variant: 'gradient',
    },
});
