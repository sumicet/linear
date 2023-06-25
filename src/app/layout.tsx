'use client';

import { ChakraBaseProvider, VStack, Center, Box } from '@chakra-ui/react';
import './globals.css';
import '@fontsource-variable/inter';
import { theme } from '@/theme';
import { Header } from './Header';

// export const metadata = {
//     title: 'Linear – A better way to build products',
//     description:
//         'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
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
                        <VStack
                            spacing='space64'
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
