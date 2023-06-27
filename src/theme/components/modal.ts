import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

export const Modal = defineMultiStyleConfig({
    baseStyle: props => ({
        overlay: {
            zIndex: 'modal',
        },
        dialogContainer: {
            display: 'flex',
            zIndex: 'modal',
            justifyContent: 'center',
            alignItems: props?.isCentered ? 'center' : 'flex-start',
            overflow: props?.scrollBehavior === 'inside' ? 'hidden' : 'auto',
            overscrollBehaviorY: 'none',
        },
        dialog: {
            zIndex: 'modal',
            color: 'inherit',
            // maxH: props?.scrollBehavior === 'inside' ? 'calc(100% - 7.5rem)' : undefined,
        },
        body: {
            overflow: props?.scrollBehavior === 'inside' ? 'auto' : undefined,
        },
    }),
    sizes: {
        full: {
            dialog: {
                maxWidth: '100dvw',
                minHeight: '100dvh',
            },
        },
    },
});
