import { MotionVStack } from '@/components';
import { ComponentPropsWithoutRef } from 'react';

export function Card(props: ComponentPropsWithoutRef<typeof MotionVStack>) {
    return (
        <MotionVStack
            {...props}
            spacing='space32'
            width='100%'
            minHeight={{ base: 420, sm: 480 }}
            overflow='hidden'
            bg='linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)'
            borderRadius='radius48'
            justifyContent='end'
            _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.07))',
                mask: 'linear-gradient(black, black) content-box content-box, linear-gradient(black, black)',
                maskComposite: 'xor',
                padding: 1,
                borderRadius: 'inherit',
            }}
            paddingX={{
                base: 'space32',
                md: 'space56',
            }}
            paddingY={{
                base: 'space8',
                md: 'space56',
            }}
        />
    );
}
