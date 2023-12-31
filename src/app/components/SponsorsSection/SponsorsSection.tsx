import { Icon, MotionCenter, MotionText, MotionVStack } from '@/components';
import { SimpleGrid, Text, VStack, useBreakpointValue } from '@chakra-ui/react';
import { Horizon } from './Horizon';

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
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const logoVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 + custom * 0.05 },
    }),
};

export function SponsorsSection() {
    const logos = useBreakpointValue({ base: allLogos.slice(0, 6), md: allLogos });

    return (
        <MotionVStack
            width='100%'
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
                amount: 0.5,
            }}
            spacing={0}
        >
            <MotionVStack width='100%' spacing='space48'>
                <VStack width='100%' spacing={0}>
                    <MotionText
                        variants={textVariants}
                        size={{ base: 'bodyL', md: 'bodyXL' }}
                        color='secondary'
                        textAlign='center'
                    >
                        Powering the world’s best product teams.{' '}
                        <Text
                            as='span'
                            display={{ base: undefined, md: 'block' }}
                            color='primary'
                            size={{ base: 'bodyL', md: 'bodyXL' }}
                            textAlign='center'
                        >
                            From next-gen startups to established enterprises.
                        </Text>
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

            <Horizon />
        </MotionVStack>
    );
}
