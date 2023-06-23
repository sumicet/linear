'use client';

import { Flex, Text } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';

export default function Home() {
    return (
        <Flex as='main' display='flex' flex={1} width='100%'>
            <Balancer>
                <Text as='h1' variant='heading'>
                    Linear is a better way to build products
                </Text>
            </Balancer>
        </Flex>
    );
}
