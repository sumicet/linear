'use client';

import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';

export default function Home() {
    return (
        <VStack as='main' spacing='space24' display='flex' flex={1} width='100%'>
            <Button variant='glass' size='extraSmall'>
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
