'use client';

import { Box, Button, Center, Icon, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { BsArrowRight } from 'react-icons/bs';

export default function Home() {
    return (
        <VStack as='main' spacing='space24' display='flex' flex={1} width='100%'>
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
        </VStack>
    );
}
