import { MotionText, MotionVStack } from '@/components';
import { Grid, Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';
import { Card } from './Card';
import { CardText } from './CardText';

const textVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.4, duration: 1, ease: 'easeOut' },
    }),
};

const cardVariants = {
    hidden: (custom: 'left' | 'right') => ({ opacity: 0, x: custom === 'left' ? '-50%' : '50%' }),
    visible: {
        opacity: 1,
        x: '0%',
        transition: { delay: 0.8, duration: 1.2, ease: 'easeInOut' },
    },
};

export function ToolsSection() {
    return (
        <MotionVStack
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
            }}
            width='100%'
            spacing='space24'
        >
            <Balancer>
                <MotionText variants={textVariants} size='title' textAlign='center'>
                    Unlike any tool you’ve used before
                </MotionText>
            </Balancer>
            <Balancer>
                <MotionText
                    variants={textVariants}
                    custom={0.4}
                    size='extraLarge'
                    color='secondary'
                    textAlign='center'
                >
                    Designed to the last pixel and engineered with unforgiving precision, Linear
                    combines UI elegance with world-class performance.
                </MotionText>
            </Balancer>
            {/* Make it so that the first column is 3/4 of the space and the second is 1/3, only 4 columns per line */}

            <Grid templateColumns='repeat(6, 1fr)' gap='space24' width='100%'>
                <Card gridColumn='auto / span 4' variants={cardVariants} custom='left'>
                    <CardText
                        title='Built for your keyboard'
                        description='Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.'
                    />
                </Card>
                <Card gridColumn='auto / span 2' variants={cardVariants} custom='right'>
                    <CardText
                        title='Breathtakingly fast'
                        description='Built for speed with 50ms interactions and real-time sync.'
                    />
                </Card>
                <Card gridColumn='auto / span 2' variants={cardVariants} custom='left'>
                    <CardText
                        title='Designed for modern software teams'
                        description='Comes with built-in workflows that create focus and routine.'
                    />
                </Card>
                <Card gridColumn='auto / span 4' variants={cardVariants} custom='right'>
                    <CardText
                        title='Meet your command line'
                        description='Complete any action in seconds with the global command menu.'
                    />
                </Card>
            </Grid>
        </MotionVStack>
    );
}
