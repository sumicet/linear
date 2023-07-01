import { recipes } from '@/theme';
import { Grid } from '@chakra-ui/react';
import { Card } from './Card';
import { KeyboardAnimation } from './KeyboardAnimation';
import { CardText } from './CardText';
import { Bolt } from './Bolt';
import { Circle } from './Circle';
import { CommandLine } from './CommandLine';

const cardVariants = {
    hidden: (custom: 'left' | 'right') => ({ opacity: 0, x: custom === 'left' ? '-25%' : '25%' }),
    visible: {
        opacity: 1,
        x: '0%',
        transition: { delay: 0.3, duration: 0.7, ease: 'easeInOut' },
    },
};

// Make it so that the first column is 3/4 of the space and the second is 1/3, only 4 columns per line

export function Cards() {
    return (
        <Grid
            display={{ base: 'flex', lg: 'grid' }}
            overflow='auto'
            maxWidth='calc(100dvw - 48px)'
            scrollSnapType='x mandatory'
            templateColumns={{ lg: 'repeat(6, 1fr)' }}
            gap='space24'
            width='100%'
            sx={recipes.hiddenScrollbar}
        >
            <Card
                gridColumn={{ lg: 'auto / span 4' }}
                variants={cardVariants}
                custom='left'
                scrollSnapAlign='center'
                minWidth={{ base: '100%', lg: undefined }}
            >
                <KeyboardAnimation />

                <CardText
                    title='Built for your keyboard'
                    description='Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.'
                />
            </Card>
            <Card
                spacing={0}
                gridColumn={{ lg: 'auto / span 2' }}
                variants={cardVariants}
                custom='right'
                scrollSnapAlign='center'
                minWidth={{ base: '100%', lg: undefined }}
            >
                <Bolt position='absolute' top={-92} pointerEvents='none' userSelect='none' />
                <CardText
                    title='Breathtakingly fast'
                    description='Built for speed with 50ms interactions and real-time sync.'
                />
            </Card>
            <Card
                gridColumn={{ lg: 'auto / span 2' }}
                variants={cardVariants}
                custom='left'
                scrollSnapAlign='center'
                minWidth={{ base: '100%', lg: undefined }}
            >
                <Circle
                    position='absolute'
                    width='130%'
                    top={-80}
                    pointerEvents='none'
                    userSelect='none'
                />
                <CardText
                    title='Designed for modern software teams'
                    description='Comes with built-in workflows that create focus and routine.'
                />
            </Card>
            <Card
                gridColumn={{ lg: 'auto / span 4' }}
                variants={cardVariants}
                custom='right'
                scrollSnapAlign='center'
                minWidth={{ base: '100%', lg: undefined }}
            >
                <CardText
                    title='Meet your command line'
                    description='Complete any action in seconds with the global command menu.'
                />
                <CommandLine />
            </Card>
        </Grid>
    );
}
