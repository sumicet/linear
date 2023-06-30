import { Icon, Link } from '@/components';
import { HStack } from '@chakra-ui/react';

const socialMediaIcons = [
    {
        type: 'twitter',
        link: 'https://twitter.com/sumicet',
    },
    {
        type: 'gitHub',
        link: 'https://github.com/sumicet',
    },
    {
        type: 'slack',
        link: 'https://slack.com',
    },
] as const;

export function SocialMediaIcons() {
    return (
        <HStack spacing='space24'>
            {socialMediaIcons.map(({ type, link }) => (
                <Link
                    key={type}
                    variant='ghost'
                    href={link}
                    _before={{
                        content: '""',
                        position: 'absolute',
                        inset: '-space8',
                    }}
                >
                    <Icon type={type} boxSize={18} color='inherit' />
                </Link>
            ))}
        </HStack>
    );
}
