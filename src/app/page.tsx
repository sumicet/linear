'use client';

import { VStack } from '@chakra-ui/react';
import { MainSection, Sponsors } from './components';

export default function Home() {
    return (
        <VStack
            as='main'
            spacing={{ base: 'space164', md: 'space256' }}
            display='flex'
            flex={1}
            width='100%'
        >
            <MainSection />
            <Sponsors />
        </VStack>
    );
}
