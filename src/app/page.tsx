'use client';

import { VStack } from '@chakra-ui/react';
import { IssueTrackingSection, MainSection, SponsorsSection, ToolsSection } from './components';

export default function Home() {
    return (
        <VStack as='main' flex={1} spacing={{ base: 'space128', md: 'space256' }}>
            <VStack
                flex={1}
                width='100%'
                spacing={0}
                maxWidth='container'
                paddingX={{
                    base: 'space24',
                    sm: 'space32',
                }}
            >
                <VStack spacing={{ base: 'space164', md: 'space256' }} flex={1} width='100%'>
                    <MainSection />
                    <SponsorsSection />
                </VStack>
                <ToolsSection />
            </VStack>
            <IssueTrackingSection />
        </VStack>
    );
}
