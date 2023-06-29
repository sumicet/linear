import '@/theme/globals.css';
import '@fontsource-variable/inter';
import { Layout } from './@layout';
import { Metadata } from 'next';
import { config } from '@/config';

export const metadata: Metadata = {
    title: 'Linear – A better way to build products',
    description:
        'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
    icons: [
        {
            rel: 'icon',
            url: 'favicon.ico',
        },
    ],
    twitter: {
        title: 'Linear – A better way to build products',
        site: '@linear',
        creator: '@linear',
        card: 'summary_large_image',
        images: ['home.jpg'],
        description:
            'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
    },
    openGraph: {
        title: 'Linear – A better way to build products',
        url: config.url,
        siteName: 'Linear',
        type: 'website',
        images: ['/home.jpg'],
        description:
            'Linear streamlines issues, sprints, and product roadmaps. It’s the new standard for modern software development.',
    },
    keywords: [
        'linear',
        'linear app',
        'linear app download',
        'software development',
        'modern software',
        'product roadmap',
        'issues',
        'sprints',
        'tasks',
        'jira alternative',
        'kanban',
        'scrum',
        'bug tracking',
        'team collaboration',
        'agile',
        'development tools',
    ],
    colorScheme: 'dark',
    appleWebApp: {
        title: 'Linear – A better way to build products',
        capable: true,
        statusBarStyle: 'black',
    },
    applicationName: 'Linear',
    authors: [
        {
            name: 'sumicet',
            url: 'https://github.com/sumicet',
        },
        {
            name: 'Linear Team',
            url: 'https://linear.app/about',
        },
    ],
    publisher: 'Vercel',
    themeColor: 'rgb(0, 2, 18)',
};

export default function RootLayout({ children }: { children?: React.ReactNode }) {
    return (
        <html lang='en'>
            <body suppressHydrationWarning={true}>
                <Layout>{children}</Layout>
            </body>
        </html>
    );
}
