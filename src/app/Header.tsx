import { Button, Divider, HStack, Text, VStack } from '@chakra-ui/react';
import { Icon, Link } from '@/components';

const links = [
    'Features',
    'Method',
    'Customers',
    'Changelog',
    'Integrations',
    'Pricing',
    'Company',
];

export function Header() {
    return (
        <VStack width='100%' spacing={0}>
            <HStack as='ul' height='menu' width='100%' spacing='space24'>
                <Link href='/'>
                    <Icon type='logo' height={18} cursor='pointer' />
                </Link>
                {links.map(link => (
                    <Link key={link} variant='solid' href={`/${link.toLowerCase()}`}>
                        {link}
                    </Link>
                ))}
                <Link
                    variant='solid'
                    href='/login'
                    flex={1}
                    display='flex'
                    justifyContent='flex-end'
                >
                    Log in
                </Link>
                <Button size='small'>Sign up</Button>
            </HStack>
            <Divider />
        </VStack>
    );
}
