import { Box, Divider, Flex, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import { Lamp } from './Lamp';
import {
    Image,
    MotionBox,
    MotionFlex,
    MotionSimpleGrid,
    MotionText,
    MotionVStack,
} from '@/components';
import { Balancer } from 'react-wrap-balancer';
import issues from '@/assets/issues.webp';
import cycles from '@/assets/cycles.webp';
import roadmap from '@/assets/roadmap.webp';
import { HiSquaresPlus } from 'react-icons/hi2';
import { TbCircleDotted, TbMessageCircle2Filled } from 'react-icons/tb';
import { PiCircleNotchFill, PiShieldWarningFill } from 'react-icons/pi';
import { IoLayers } from 'react-icons/io5';
import { HiTemplate, HiDocumentText } from 'react-icons/hi';
import { GoIssueTracks, GoClockFill } from 'react-icons/go';
import { FaCogs, FaMap } from 'react-icons/fa';
import { MdAddTask, MdViewTimeline, MdInsights } from 'react-icons/md';
import { SlGraph } from 'react-icons/sl';
import { IoIosPeople } from 'react-icons/io';
import { IoIosNotifications } from 'react-icons/io';

const textVariants = {
    hidden: {
        y: '40%',
    },
    visible: {
        y: '0%',
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const lightVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 0.8,
        transition: {
            duration: 0.8,
            ease: 'easeOut',
        },
    },
};

const descriptionVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
};

const gridVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 + custom * 0.05 },
    }),
};

const data = [
    {
        title: (
            <>
                Issue tracking
                <br />
                you’ll enjoy using
            </>
        ),
        description:
            'Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team.',
        image: {
            src: issues,
            width: 777,
            aspectRatio: '777 / 266',
        },
        light: 'rgba(194,97,254,0.1)',
        lampColor: '#352a4f',
        grid: [
            {
                icons: [HiSquaresPlus],
                title: 'Parent and sub-issues.',
                description: 'Break larger tasks into smaller issues.',
            },
            {
                icons: [TbCircleDotted],
                title: 'Automated backlog.',
                description: 'Linear will auto-close and auto-archive issues.',
            },
            {
                icons: [PiCircleNotchFill],
                title: 'Custom workflows.',
                description: 'Define unique issue states for each team.',
            },
            {
                icons: [IoLayers],
                title: 'Filters and custom views.',
                description: 'See only what’s relevant for you.',
            },
            {
                icons: [TbMessageCircle2Filled],
                title: 'Discussion.',
                description: 'Collaborate on issues without losing context.',
            },
            {
                icons: [HiTemplate],
                title: 'Issue templates.',
                description: 'Guide your team to write effective issues.',
            },
        ],
    },
    {
        title: (
            <>
                Build momentum
                <br />
                with Cycles
            </>
        ),
        description:
            'Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress.',
        image: {
            src: cycles,
            width: 1084,
            aspectRatio: '1084 / 515',
        },
        light: 'rgba(40,87,255,0.1)',
        lampColor: '#303a75',
        grid: [
            {
                icons: [GoIssueTracks],
                title: 'Automatic tracking.',
                description: 'Any started issues are added to the current cycle.',
            },
            {
                icons: [GoClockFill],
                title: 'Scheduled.',
                description: 'Unfinished work rolls over to the next cycle automatically.',
            },
            {
                icons: [FaCogs],
                title: 'Fully configurable.',
                description: 'Define start date, end date, duration, and more.',
            },
            {
                icons: [PiShieldWarningFill],
                title: 'Predict delays.',
                description: 'Get warnings for at-risk cycles.',
            },
            {
                icons: [MdAddTask],
                title: 'Scope creep.',
                description: 'Understand which issues are added mid-cycle.',
            },
            {
                icons: [SlGraph],
                title: 'Be prepared.',
                description: 'Schedule work in advance with upcoming cycles.',
            },
        ],
    },
    {
        title: (
            <>
                Set direction
                <br />
                with Roadmaps
            </>
        ),
        description:
            'Plan visually, collaborate in cross-team projects, and make better decisions with progress insights and project updates.',
        image: {
            src: roadmap,
            width: 1084,
            aspectRatio: '1084 / 515',
        },
        light: 'rgba(0,225,244,0.1)',
        lampColor: '#1F3140',
        grid: [
            {
                icons: [IoIosPeople],
                title: 'Multi-team projects.',
                description: 'Collaborate across teams and departments.',
            },
            {
                icons: [HiDocumentText],
                title: 'Project documents.',
                description: 'Write project briefs and specs directly in Linear.',
            },
            {
                icons: [FaMap],
                title: 'Custom roadmaps.',
                description: 'Organize projects across multiple roadmaps.',
            },
            {
                icons: [MdViewTimeline],
                title: 'Timeline view.',
                description: 'Visualize the product journey ahead.',
            },
            {
                icons: [MdInsights],
                title: 'Project insights.',
                description: 'Track scope, velocity, and progress over time.',
            },
            {
                icons: [IoIosNotifications],
                title: 'Personal notifications.',
                description: 'Stay in the loop on project activity and updates.',
            },
        ],
    },
];

export function IssueTrackingSection() {
    return (
        <>
            {data.map(({ title, description, grid, image, light, lampColor }) => (
                <MotionVStack
                    key={description}
                    viewport={{
                        amount: 0.5,
                    }}
                    initial='hidden'
                    whileInView='visible'
                    spacing='space64'
                >
                    <VStack spacing='space64' width='100%'>
                        <Lamp color={lampColor} />
                        <VStack>
                            <Balancer>
                                <MotionText
                                    variants={textVariants}
                                    variant='gradient'
                                    size={{ base: 'headingXL', lg: 'headingXXl' }}
                                    maxWidth='container'
                                    paddingX={{
                                        base: 'space24',
                                        sm: 'space32',
                                    }}
                                >
                                    {title}
                                </MotionText>
                            </Balancer>
                        </VStack>
                        <Box
                            backdropFilter='blur(6px)'
                            aspectRatio={image.aspectRatio}
                            width={`min(calc(100vw - (100vw - 100%) - 10%), ${image.width}px)`}
                            borderRadius={14}
                            // Outline of the image
                            _before={{
                                content: '""',
                                position: 'absolute',
                                inset: 0,
                                borderRadius: 'inherit',
                                bg: 'linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 120%)',
                                mask: 'linear-gradient(black, black) content-box content-box, linear-gradient(black, black)',
                                maskComposite: 'xor',
                                boxSize: '100%',
                                padding: 1,
                            }}
                        >
                            <Box
                                position='absolute'
                                boxSize='100%'
                                inset={0}
                                sx={{
                                    maskImage: 'linear-gradient(black, transparent)',
                                }}
                                borderRadius='inherit'
                                _before={{
                                    content: '""',
                                    position: 'absolute',
                                    inset: 0,
                                    boxSize: '100%',
                                    bg: 'white15',
                                    borderRadius: 'inherit',
                                }}
                            />
                            <Image
                                src={image.src}
                                alt="Creating an issue in Linear with the title 'Add translucent modals' and a description 'We should bring the glass effect to the app'."
                            />
                        </Box>
                        <MotionBox
                            variants={lightVariants}
                            position='absolute'
                            inset={0}
                            pointerEvents='none'
                            userSelect='none'
                            bg={`radial-gradient(ellipse 50% 50% at center,${light},transparent)`}
                            boxSize='100%'
                        />
                    </VStack>
                    <Balancer>
                        <MotionText
                            variants={descriptionVariants}
                            viewport={{
                                once: true,
                            }}
                            initial='hidden'
                            whileInView='visible'
                            size={{ base: 'headingS', lg: 'headingM' }}
                            textAlign='center'
                            maxWidth='container'
                            paddingX={{
                                base: 'space24',
                                sm: 'space32',
                            }}
                        >
                            {description}
                        </MotionText>
                    </Balancer>
                    <Divider variant='gradient' />
                    <MotionSimpleGrid
                        gap='space24'
                        rowGap={50}
                        columns={{ base: 2, lg: 3 }}
                        width='100%'
                        maxWidth='container'
                        paddingX={{
                            base: 'space24',
                            sm: 'space32',
                        }}
                        // Must stay above the dark light emitted by the lamp
                        zIndex={1}
                        viewport={{
                            amount: 0.3,
                            once: true,
                        }}
                        initial='hidden'
                        whileInView='visible'
                    >
                        {grid.map(({ icons, title, description }) => (
                            <MotionFlex
                                key={title}
                                variants={gridVariants}
                                justifyContent='center'
                                flex={1}
                            >
                                <Box width='100%' maxWidth={256}>
                                    {icons.map(Component => (
                                        <Icon
                                            key={Component.name}
                                            as={Component}
                                            boxSize='space16'
                                            marginRight={6}
                                        />
                                    ))}
                                    <Text display='inline' size={{ base: 'bodyS', md: 'bodyM' }}>
                                        {title}{' '}
                                    </Text>
                                    <Text
                                        display='inline'
                                        color='secondary'
                                        size={{ base: 'bodyS', md: 'bodyM' }}
                                    >
                                        {description}
                                    </Text>
                                </Box>
                            </MotionFlex>
                        ))}
                    </MotionSimpleGrid>
                </MotionVStack>
            ))}
        </>
    );
}
