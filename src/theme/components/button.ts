import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
    baseStyle: {
        borderRadius: 'full',
        cursor: 'pointer',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    variants: {
        gradient: {
            textShadow: 'rgba(0, 0, 0, 0.25) 0px 3px 8px',
            background:
                'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
            _hover: {
                textShadow: 'rgba(0, 0, 0, 0.56) 0px 3px 12px',
                boxShadow: 'rgba(80, 63, 205, 0.5) 0px 1px 40px',
            },
            transitionProperty: 'all',
            transitionDuration: '0.12s',
        },
        glass: {
            transitionProperty: 'all',
            transitionDuration: '0.26s',
            bgColor: 'white10',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'white5',
            backdropFilter: 'blur(12px)',
            _hover: {
                bgColor: 'white20',
            },
        },
    },
    sizes: {
        extraSmall: {
            paddingX: 'space12',
            height: 28,
            textStyle: 'extraSmall',
        },
        small: {
            height: 'space32',
            paddingX: 'space16',
            textStyle: 'small',
            textAlign: 'center',
        },
        medium: {
            height: 'space48',
            paddingX: 'space24',
            textStyle: 'medium',
        },
    },
    defaultProps: {
        size: 'medium',
        variant: 'gradient',
    },
});
