import {
    Button,
    Divider,
    HStack,
    VStack,
    useBreakpointValue,
    Icon as ChakraIcon,
} from '@chakra-ui/react';
import { Icon, Link } from '@/components';
import { HiMenuAlt4 } from 'react-icons/hi';

const links = [
    'Features',
    'Method',
    'Customers',
    'Changelog',
    'Integrations',
    'Pricing',
    'Company',
];

const tabletLinks = ['Features', 'Method', 'Pricing', 'Company'];

export function Header() {
    const visibleLinks = useBreakpointValue({ base: tabletLinks, lg: links });

    return (
        <VStack width='100%' spacing={0}>
            <HStack as='ul' height='menu' width='100%' spacing='space24'>
                <Link href='/'>
                    <Icon type='logo' height={18} cursor='pointer' />
                </Link>
                {visibleLinks?.map(link => (
                    <Link
                        display={{ base: 'none', md: 'flex' }}
                        key={link}
                        variant='solid'
                        href={`/${link.toLowerCase()}`}
                    >
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
                <ChakraIcon as={HiMenuAlt4} boxSize={18} />
            </HStack>
            <Divider />
        </VStack>
    );
}
