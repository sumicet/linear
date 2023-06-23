import { IconProps as ChakraIconProps } from '@chakra-ui/react';
import { Logo } from './icons';

const icons = {
    logo: Logo,
} as const;

export interface IconProps extends ChakraIconProps {
    type: keyof typeof icons;
}

export function Icon(props: IconProps) {
    const { type, ...other } = props;
    const Component = icons[type];

    /**
     * Setting the height and width to auto prevents safari from assigning a
     * default number.
     * @see https://stackoverflow.com/a/26105445/19391114
     */
    return <Component height='auto' width='auto' {...other} />;
}
