'use client';

import { ChakraBaseProvider, VStack, Center } from '@chakra-ui/react';
import './globals.css';
import '@fontsource-variable/inter';
import { theme } from '@/theme';
import { Header } from './Header';

export const metadata = {
    title: 'Linear – A better way to build products',
    description:
        'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <ChakraBaseProvider theme={theme}>
                    <Center width='100%' flex={1} bgColor='background' color='primary'>
                        <VStack
                            spacing={0}
                            flex={1}
                            alignItems='flex-start'
                            minHeight='100dvh'
                            maxWidth='container'
                            paddingX={{
                                base: 'space24',
                                sm: 'space32',
                            }}
                        >
                            <Header />
                            {children}
                        </VStack>
                    </Center>
                </ChakraBaseProvider>
            </body>
        </html>
    );
}
