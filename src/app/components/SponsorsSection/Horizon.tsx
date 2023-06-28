import { MotionBox } from '@/components';
import { Box } from '@chakra-ui/react';
import { Stars } from './Stars';

const lightVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: [0, 0.8, 0.4], transition: { duration: 4, ease: 'easeOut' } },
};

const borderVariants = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 3, ease: 'easeOut' } },
};

export function Horizon() {
    return (
        <Box
            width='100%'
            height={600}
            overflow='hidden'
            sx={{
                maskImage: 'radial-gradient(circle at center center, black, transparent 80%)',
            }}
            margin='-128px auto'
        >
            <MotionBox
                variants={lightVariants}
                position='absolute'
                inset={0}
                background='radial-gradient(circle at bottom center,#7877C6,transparent 70%)'
            />
            <Stars />
            <MotionBox
                variants={borderVariants}
                position='absolute'
                background='background'
                width='200%'
                left='-50%'
                aspectRatio='1 / 0.7'
                borderRadius='50%'
                borderTop='1px solid rgba(120, 118, 197, 0.4)'
                top='50%'
            />
        </Box>
    );
}
