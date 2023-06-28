'use client';

import { VStack } from '@chakra-ui/react';
import { MainSection, Sponsors, ToolsSection } from './components';

export default function Home() {
    return (
        <VStack as='main' flex={1} width='100%' spacing={0}>
            <VStack spacing={{ base: 'space164', md: 'space256' }} flex={1} width='100%'>
                <MainSection />
                <Sponsors />
            </VStack>
            <ToolsSection />
        </VStack>
    );
}
