import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Priority(props: IconProps) {
    return (
        <Icon width='100%' height='100%' viewBox='0 0 16 16' fill='currentColor' {...props}>
            <rect x='1' y='8' width='3' height='6' rx='1' />
            <rect x='6' y='5' width='3' height='9' rx='1' />
            <rect x='11' y='2' width='3' height='12' rx='1' />
        </Icon>
    );
}
