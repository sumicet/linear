import { Icon, MotionBox, MotionCenter, MotionText, MotionVStack } from '@/components';
import { Box, SimpleGrid, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Stars } from './Stars';

const allLogos = [
    'rampLogo',
    'loomLogo',
    'vercelLogo',
    'descriptLogo',
    'cashAppLogo',
    'raycastLogo',
    'mercuryLogo',
    'retoolLogo',
    'alanLogo',
    'arcLogo',
    'openSeaLogo',
    'pitchLogo',
] as const;

const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.4, duration: 1, ease: 'easeOut' },
    }),
};

const logoVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: 'easeOut', delay: 0.8 + custom * 0.1 },
    }),
};

const lightVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: [0, 0.8, 0.4], transition: { duration: 4, ease: 'easeOut' } },
};

export function Sponsors() {
    const logos = useBreakpointValue({ base: allLogos.slice(0, 6), md: allLogos });
    const as = useBreakpointValue({ base: 'span', md: undefined });

    return (
        <MotionVStack
            width='100%'
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
                amount: 0.8,
            }}
            spacing={0}
        >
            <MotionVStack width='100%' spacing='space48'>
                <VStack width='100%' spacing={0}>
                    <MotionText
                        variants={textVariants}
                        size={{ base: 'large', md: 'extraLarge' }}
                        color='secondary'
                        textAlign='center'
                    >
                        Powering the world’s best product teams.{' '}
                        <MotionText
                            as={as}
                            variants={textVariants}
                            custom={1}
                            color='primary'
                            size={{ base: 'large', md: 'extraLarge' }}
                            textAlign='center'
                        >
                            From next-gen startups to established enterprises.
                        </MotionText>
                    </MotionText>
                </VStack>
                <SimpleGrid
                    columns={{ base: 2, md: 6 }}
                    rowGap='space32'
                    columnGap='space24'
                    width='100%'
                >
                    {logos?.map((type, index) => (
                        <MotionCenter
                            key={type}
                            custom={index}
                            variants={logoVariants}
                            boxSize='100%'
                        >
                            <Icon type={type} boxSize='100%' maxWidth={160} />
                        </MotionCenter>
                    ))}
                </SimpleGrid>
            </MotionVStack>
            {/* Horizon */}
            <Box
                width='100%'
                height={600}
                overflow='hidden'
                sx={{
                    maskImage: 'radial-gradient(circle at center center, black, transparent 80%)',
                }}
                margin='-128px auto'
                // Border
                _after={{
                    content: '""',
                    position: 'absolute',
                    background: 'background',
                    width: '200%',
                    left: '-50%',
                    aspectRatio: '1 / 0.7',
                    borderRadius: '50%',
                    borderTop: '1px solid rgba(120, 118, 197, 0.4)',
                    top: '50%',
                }}
            >
                <MotionBox
                    variants={lightVariants}
                    position='absolute'
                    inset={0}
                    background='radial-gradient(circle at bottom center,#7877C6,transparent 70%)'
                />
                <Stars />
            </Box>
        </MotionVStack>
    );
}
