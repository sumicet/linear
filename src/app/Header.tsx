import {
    Button,
    Divider,
    HStack,
    VStack,
    useBreakpointValue,
    Icon as ChakraIcon,
    Drawer,
    DrawerBody,
    DrawerContent,
    useDisclosure,
    useToken,
} from '@chakra-ui/react';
import { Icon, Link } from '@/components';
import { HiMenuAlt4 } from 'react-icons/hi';

const links = ['Features', 'Method', 'Customers', 'Changelog', 'Integrations', 'Pricing'];
const companyLinks = ['About', 'Blog', 'Careers'];

const tabletLinks = ['Features', 'Method', 'Pricing', 'Company'];

export function Header() {
    const visibleLinks = useBreakpointValue({ base: tabletLinks, lg: [...links, 'Company'] });
    const { isOpen, onOpen, onClose } = useDisclosure();

    const menu = useToken('sizes', 'menu');

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
                <ChakraIcon
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onOpen}
                    as={HiMenuAlt4}
                    boxSize={18}
                />
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    preserveScrollBarGap
                    blockScrollOnMount
                >
                    <DrawerContent bg='rgb(0, 2, 18)' marginTop={menu}>
                        <DrawerBody
                            paddingX={{
                                base: 'space24',
                                sm: 'space32',
                            }}
                        >
                            <VStack alignItems='flex-start' width='100%' spacing={0}>
                                {[...links, ...companyLinks].map(link => (
                                    <VStack
                                        key={link}
                                        alignItems='flex-start'
                                        width='100%'
                                        spacing={0}
                                    >
                                        <Link
                                            variant='solid'
                                            size='medium'
                                            href={`/${link.toLowerCase()}`}
                                            height='menu'
                                            display='flex'
                                            alignItems='center'
                                        >
                                            {link}
                                        </Link>
                                        <Divider />
                                    </VStack>
                                ))}
                            </VStack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </HStack>
            <Divider position='absolute' bottom={0} />
        </VStack>
    );
}
