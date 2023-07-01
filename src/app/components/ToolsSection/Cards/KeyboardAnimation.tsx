import { useCycle } from 'framer-motion';
import { Keyboard } from './Keyboard';
import { useCallback, useEffect, useRef } from 'react';
import { Box, Button, Center, HStack, Text } from '@chakra-ui/react';
import { recipes } from '@/theme';
import { MotionBox } from '@/components';
import { useScrollToChild } from '@/hooks';

const commands = [
    {
        name: 'Opens command line',
        keys: ['ctrl', 'k'],
    },
    {
        name: 'Assign issue to me',
        keys: ['i'],
    },
    {
        name: 'Assign issue to',
        keys: ['a'],
    },
    {
        name: 'Change issue status',
        keys: ['s'],
    },
    {
        name: 'Set issue priority',
        keys: ['p'],
    },
    {
        name: 'Add issue labels',
        keys: ['l'],
    },
    {
        name: 'Set due date',
        keys: ['shift', 'd'],
    },
    {
        name: 'Set parent issue',
        keys: ['shift', 'ctrl', 'p'],
    },
    {
        name: 'Add sub-issue',
        keys: ['shift', 'ctrl', 'o'],
    },
    {
        name: 'Create new issue',
        keys: ['c'],
    },
    {
        name: 'Create new issue from template',
        keys: ['alt', 'c'],
    },
    {
        name: 'Move to project',
        keys: ['shift', 'p'],
    },
    {
        name: 'Copy issue ID to clipboad',
        keys: ['ctrl', '.'],
    },
    {
        name: 'Copy git branch name to clipboard',
        keys: ['shift', 'ctrl', '.'],
    },
    {
        name: 'Copy issue as a markdown list',
        keys: ['ctrl', 'c'],
    },
    {
        name: 'Delete issue',
        keys: ['ctrl', 'backspace'],
    },
    {
        name: 'Find in view',
        keys: ['ctrl', 'f'],
    },
    {
        name: 'Rename project or issue',
        keys: ['r'],
    },
];

const keyToSymbol: Record<string, string> = {
    ctrl: '⌃',
    shift: '⇧',
    alt: '⌥',
    backspace: '⌫',
    '.': '.',
};

export function KeyboardAnimation() {
    const [command, cycle] = useCycle(...commands);
    const interval = useRef<NodeJS.Timeout>();
    const buttonRefs = useRef<(HTMLElement | null)[]>([...Array(commands.length).map(() => null)]);
    const isPaused = useRef(false);

    const [ref, scrollToChild] = useScrollToChild();

    const cycleToIndex = useCallback(
        (index: number) => {
            cycle(index);
            scrollToChild(index + 1);
        },
        [cycle, scrollToChild]
    );

    useEffect(() => {
        cycleToIndex(0);
    }, [cycleToIndex]);

    useEffect(() => {
        interval.current = setInterval(() => {
            if (isPaused.current) return;

            const previousIndex = commands.findIndex(({ name }) => name === command.name);
            cycleToIndex((previousIndex + 1) % commands.length);
        }, 3000);

        return () => {
            clearInterval(interval.current);
        };
    }, [command.keys.length, command.name, cycleToIndex]);

    return (
        <>
            <Keyboard
                pointerEvents='none'
                userSelect='none'
                sx={command.keys.reduce((acc, key) => {
                    acc[`[data-key="${key}"]`] = {
                        rect: {
                            fillOpacity: 0.4,
                            strokeOpacity: 1,
                        },
                    };
                    return acc;
                }, {} as Record<string, any>)}
            />
            <HStack
                ref={ref}
                width='100%'
                overflow='auto'
                scrollSnapType='x mandatory'
                spacing='space8'
                maxWidth='100%'
                sx={{
                    maskImage:
                        'linear-gradient(to right, transparent, black 40%, black calc(60%), transparent 100%)',
                    ...recipes.hiddenScrollbar,
                }}
                position='relative'
            >
                <Box minWidth={200} minHeight={1} scrollSnapAlign='center' />
                {commands.map(({ name, keys }, index) => (
                    <MotionBox
                        key={name}
                        ref={ref => {
                            buttonRefs.current[index] = ref as HTMLElement | null;
                        }}
                        animate={{
                            opacity: command.name === name ? 1 : 0.6,
                        }}
                        transition={{
                            duration: 0.12,
                        }}
                    >
                        <Button
                            onClick={() => {
                                isPaused.current = true;

                                cycleToIndex(index);
                                setTimeout(() => (isPaused.current = false), 3000);
                            }}
                            variant='glass'
                            size='extraSmall'
                            scrollSnapAlign='center'
                            leftIcon={
                                <Center
                                    height={20}
                                    paddingX='space8'
                                    bgColor='white5'
                                    borderRadius='full'
                                    marginLeft='-0.5rem'
                                >
                                    <Text size='bodyXS' lineHeight={1}>
                                        {keys.map(key => keyToSymbol[key] || key.toUpperCase())}
                                    </Text>
                                </Center>
                            }
                        >
                            {name}
                        </Button>
                    </MotionBox>
                ))}
                <Box minWidth={200} minHeight={1} scrollSnapAlign='center' />
            </HStack>
        </>
    );
}
