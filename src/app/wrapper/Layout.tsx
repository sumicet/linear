'use client';

import { ChakraBaseProvider, VStack, Center, Box, Flex } from '@chakra-ui/react';
import '@fontsource-variable/inter';
import { theme } from '@/theme';
import { Header } from './Header';
import { ReactNode } from 'react';
import { Footer } from './Footer';

export function Layout({ children }: { children: ReactNode }) {
    return (
        <ChakraBaseProvider theme={theme}>
            <Center width='100%' flex={1} bgColor='background' color='primary'>
                <Box
                    position='absolute'
                    top={0}
                    left={0}
                    boxSize='100%'
                    bg='radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)'
                    pointerEvents='none'
                />
                <VStack width='100%'>
                    <Header />
                    <Flex paddingTop='space64' minHeight='100dvh' width='100%'>
                        {children}
                    </Flex>
                    <Footer />
                </VStack>
            </Center>
        </ChakraBaseProvider>
    );
}
