import type { IconProps } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';

export function Label(props: IconProps) {
    return (
        <Icon width='100%' height='100%' viewBox='0 0 16 16' fill='currentColor' {...props}>
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M10.2105 4C10.6337 4 11.0126 4.18857 11.24 4.48L14 8L11.24 11.52C11.0126 11.8114 10.6337 12 10.2105 12L3.26316 11.9943C2.56842 11.9943 2 11.4857 2 10.8571V5.14286C2 4.51429 2.56842 4.00571 3.26316 4.00571L10.2105 4ZM11.125 9C11.6773 9 12.125 8.55228 12.125 8C12.125 7.44772 11.6773 7 11.125 7C10.5727 7 10.125 7.44772 10.125 8C10.125 8.55228 10.5727 9 11.125 9Z'
            />
        </Icon>
    );
}
