import { MotionBox, MotionVStack } from '@/components';
import { Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { Hero } from './Hero';
import { BsArrowRight } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';

const animationProps = {
    initial: {
        opacity: 0,
        y: -10,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    whileInView: {
        once: true,
    },
    transition: {
        duration: 1,
        ease: 'easeOut',
    },
};

export function MainSection() {
    return (
        <VStack spacing={{ base: 'space72', md: 'space128' }} width='100%'>
            <VStack spacing='space48' width='100%'>
                <VStack spacing='space24' width='100%' maxWidth={1130}>
                    <MotionVStack spacing='space24' width='100%' {...animationProps}>
                        <Button
                            variant='glass'
                            size='extraSmall'
                            rightIcon={
                                <Center
                                    height={20}
                                    paddingX='space8'
                                    bgColor='white5'
                                    borderRadius='full'
                                    marginRight='-0.5rem'
                                >
                                    <Icon as={BsArrowRight} />
                                </Center>
                            }
                        >
                            Linear × Figma Plugin
                        </Button>
                        <Balancer>
                            <Text
                                as='h1'
                                size={{ base: 'headingXL', md: 'headingXXl' }}
                                variant='gradient'
                            >
                                Linear is a better way to build products
                            </Text>
                        </Balancer>
                    </MotionVStack>
                    <MotionBox
                        {...animationProps}
                        transition={{
                            ...animationProps.transition,
                            delay: 0.4,
                        }}
                    >
                        <Balancer>
                            <Text
                                as='h2'
                                size={{ base: 'bodyL', md: 'bodyXL' }}
                                color='secondary'
                                textAlign='center'
                            >
                                Meet the new standard for modern software development. Streamline
                                issues, sprints, and product roadmaps.
                            </Text>
                        </Balancer>
                    </MotionBox>
                </VStack>
                <MotionBox
                    {...animationProps}
                    transition={{
                        ...animationProps.transition,
                        delay: 0.8,
                    }}
                >
                    <Button rightIcon={<Icon as={HiChevronRight} boxSize='space16' />}>
                        Get started
                    </Button>
                </MotionBox>
            </VStack>
            <Hero />
        </VStack>
    );
}
