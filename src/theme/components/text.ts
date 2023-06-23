import { defineStyleConfig } from '@chakra-ui/styled-system';
import { textStyles } from '../foundations/textStyles';

/**
 * @see https://chakra-ui.com/docs/components/text/usage
 */
export const Text = defineStyleConfig({
    variants: textStyles,
    // defaultProps: {
    //     variant: 'body',
    // },
});
