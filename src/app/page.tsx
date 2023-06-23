'use client';

import { Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { BsArrowRight } from 'react-icons/bs';
import { HiChevronRight } from 'react-icons/hi';

export default function Home() {
    return (
        <VStack as='main' spacing='space48' display='flex' flex={1} width='100%'>
            <VStack spacing='space24' width='100%'>
                <Button
                    variant='glass'
                    size='extraSmall'
                    rightIcon={
                        <Center height={20} paddingX='space8' bgColor='white5' borderRadius='full'>
                            <Icon as={BsArrowRight} />
                        </Center>
                    }
                >
                    Linear × Figma Plugin
                </Button>
                <Balancer>
                    <Text as='h1' variant='heading'>
                        Linear is a better way to build products
                    </Text>
                </Balancer>
                <Balancer>
                    <Text as='h2' variant='large' color='secondary'>
                        Meet the new standard for modern software development. Streamline issues,
                        sprints, and product roadmaps.
                    </Text>
                </Balancer>
            </VStack>
            <Button rightIcon={<Icon as={HiChevronRight} boxSize='space16' />}>Get started</Button>
        </VStack>
    );
}
