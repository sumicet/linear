import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys);

export const Input = defineMultiStyleConfig({
    baseStyle: {
        field: {
            padding: 'space20',
            caretColor: 'rgb(92, 103, 199)',
            height: 62,
            textStyle: 'bodyL',
            _placeholder: {
                color: 'tertiary',
            },
            background: 'transparent',
            _focus: {
                outline: 'none',
            },
        },
    },
});
