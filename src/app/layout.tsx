import './globals.css';
import '@fontsource-variable/inter';
import { Providers } from './Providers';

export const metadata = {
    title: 'Linear – A better way to build products',
    description:
        'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
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
