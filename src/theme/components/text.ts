import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';

/**
 * @see https://chakra-ui.com/docs/components/text/usage
 */
export const Text = defineStyleConfig({
    sizes: textStyles,
    variants: {
        gradient: {
            backgroundImage:
                'linear-gradient(to right bottom, rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))',
            backgroundClip: 'text',
            color: 'unset',
            textAlign: 'center',
            textFillColor: 'transparent',
            boxDecorationBreak: 'clone',
        },
    },
    // defaultProps: {
    //     variant: 'body',
    // },
});
