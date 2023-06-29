import './globals.css';
import '@fontsource-variable/inter';
import { Providers } from './Providers';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Linear – A better way to build products',
    description:
        'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
    icons: [
        {
            rel: 'icon',
            url: '/favicon.ico',
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
