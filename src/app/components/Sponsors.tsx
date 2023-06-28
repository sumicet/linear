import { Icon, MotionCenter, MotionText, MotionVStack } from '@/components';
import { Center, SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react';

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

export function Sponsors() {
    const logos = useBreakpointValue({ base: allLogos.slice(0, 6), md: allLogos });

    return (
        <MotionVStack
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
                amount: 0.8,
            }}
            width='100%'
            spacing='space48'
        >
            <VStack width='100%' spacing={0}>
                <MotionText
                    variants={textVariants}
                    size={{ base: 'large', md: 'extraLarge' }}
                    color='secondary'
                    textAlign='center'
                >
                    Powering the world’s best product teams.
                    <MotionText
                        as='span'
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
                    <MotionCenter key={type} custom={index} variants={logoVariants} boxSize='100%'>
                        <Icon type={type} boxSize='100%' maxWidth={160} />
                    </MotionCenter>
                ))}
            </SimpleGrid>
        </MotionVStack>
    );
}
