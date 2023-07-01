import { MotionText, MotionVStack } from '@/components';
import { Balancer } from 'react-wrap-balancer';
import { Cards } from './Cards';

const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.1, duration: 0.7, ease: 'easeOut' },
    }),
};

export function ToolsSection() {
    return (
        <MotionVStack
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
                amount: 0.3,
            }}
            width='100%'
            spacing='space24'
        >
            <Balancer>
                <MotionText
                    variants={textVariants}
                    size={{ base: 'headingM', md: 'healingL' }}
                    textAlign='center'
                >
                    Unlike any tool you’ve used before
                </MotionText>
            </Balancer>
            <Balancer>
                <MotionText
                    variants={textVariants}
                    custom={0.4}
                    size={{ base: 'bodyL', md: 'bodyXL' }}
                    color='secondary'
                    textAlign='center'
                >
                    Designed to the last pixel and engineered with unforgiving precision, Linear
                    combines UI elegance with world-class performance.
                </MotionText>
            </Balancer>
            <Cards />
        </MotionVStack>
    );
}
