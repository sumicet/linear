import { Icon, Link, MotionDivider, MotionFooter, MotionStack, MotionVStack } from '@/components';
import { Divider, HStack, Stack, Text, VStack, Wrap, chakra } from '@chakra-ui/react';
import { SocialMediaIcons } from './SocialMediaIcons';

const footer = [
    {
        title: 'Product',
        links: [
            'Features',
            'Integrations',
            'Pricing',
            'Changelog',
            'Docs',
            'Linear Method',
            'Download',
        ],
    },
    {
        title: 'Company',
        links: ['About us', 'Blog', 'Careers', 'Customers', 'Brand'],
    },
    {
        title: 'Resources',
        links: [
            'Community',
            'Contact',
            'DPA',
            'Privacy Policy',
            'Terms of service',
            'Report a vulnerability',
        ],
    },
    {
        title: 'Developers',
        links: ['API', 'Status', 'GitHub', 'Magic'],
    },
];

const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay: custom * 0.01 + 0.4 },
    }),
};

const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const dividerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

export function Footer() {
    return (
        <MotionFooter
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
            }}
            width='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            paddingTop='space128'
        >
            <MotionDivider variants={dividerVariants} variant='ghost' />
            <Wrap
                paddingY='space56'
                paddingX={{ base: 'space24', md: 'space32' }}
                width='100%'
                spacing={0}
                spacingY={{ base: 'space40', xl: 0 }}
                maxWidth='container'
            >
                <MotionStack
                    variants={textVariants}
                    direction={{ base: 'row', xl: 'column' }}
                    flex={1}
                    minWidth={{ base: '100%', xl: 'auto' }}
                    justifyContent='space-between'
                >
                    <HStack alignItems={{ base: 'center', xl: 'flex-start' }}>
                        <Icon type='logoSmall' boxSize={18} />
                        <Link href='/' size='small' variant='ghost' whiteSpace='nowrap'>
                            Linear - Designed Worldwide
                        </Link>
                    </HStack>
                    <SocialMediaIcons />
                </MotionStack>
                {footer.map(({ title, links }, index) => (
                    <MotionVStack
                        key={title}
                        variants={variants}
                        custom={index}
                        spacing={14}
                        minWidth={{ base: 'calc(50% - 32px)', xl: 'min(180px, 100%)' }}
                        alignItems='flex-start'
                    >
                        <Text size='bodyS'>{title}</Text>
                        {links.map(link => (
                            <Link
                                key={link}
                                href={`/${link.toLowerCase().split(' ')[0]}`}
                                size='small'
                                variant='ghost'
                            >
                                {link}
                            </Link>
                        ))}
                    </MotionVStack>
                ))}
            </Wrap>
        </MotionFooter>
    );
}
