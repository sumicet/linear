import { MotionFlex } from '@/components';
import { Box } from '@chakra-ui/react';

const lampVariants = {
    hidden: {
        opacity: 0.4,
        rotate: 180,
    },
    visible: {
        scale: 2,
        translateZ: 0,
        opacity: 1,
        transition: {
            duration: 0.96,
            rotate: {
                duration: 0,
            },
        },
    },
};

export function Lamp({ color }: { color: string }) {
    return (
        <Box width='100%' height={1}>
            <MotionFlex
                width='100%'
                height={400}
                marginTop={-200}
                pointerEvents='none'
                userSelect='none'
                sx={{
                    WebkitMaskImage:
                        'radial-gradient(50% 50% at center center, black, transparent)',
                    // Prevents the line between conic gradients to be displayed when they're scaled up
                    willChange: 'transform, opacity',
                }}
                transformOrigin='center center'
                variants={lampVariants}
                position='absolute'
            >
                <Box boxSize='100%' bg={`conic-gradient(from 90deg at 80% 50%,#000212,${color})`} />
                <Box
                    boxSize='100%'
                    bg={`conic-gradient(from 270deg at 20% 50%,${color},#000212)`}
                />
            </MotionFlex>
        </Box>
    );
}
