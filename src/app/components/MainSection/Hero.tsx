import { Image, MotionBox, MotionSvg } from '@/components';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import hero4x from '@/assets/hero@4x.webp';
import { Fragment } from 'react';

const pathDuration = 0.6;

const variants = {
    hidden: {
        rotateX: 25,
        translateZ: 0,
    },
    visible: {
        rotateX: 0,
        translateZ: [0, -200, 0],
    },
};

const pathVariants = {
    hidden: {
        pathLength: 0,
    },
    visible: {
        pathLength: 1,
        transition: {
            duration: pathDuration,
        },
    },
};

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const lines = [
    {
        duration: 2,
        repeatDelay: 4,
    },
    {
        duration: 2,
        repeatDelay: 3,
    },
    {
        duration: 2,
        repeatDelay: 8,
    },
];

const paths = [
    'M1127 52H240',
    'M240 849V0',
    'M1127 849L1127 0',
    'M1127 104L240 104',
    'M1127 446L240 446',
    'M1127 590L240 590',
    'M1499 147H1127',
    'M1499 405H1127',
    'M1499 477H1127',
    'M1499 551H1127',
    'M1127 249L240 249',
];

export function Hero() {
    const lightAnimation = useAnimation();

    return (
        <MotionBox
            width='100%'
            height='fit-content'
            variants={variants}
            initial='hidden'
            whileInView='visible'
            viewport={{
                once: true,
            }}
            transition={{
                rotateX: {
                    duration: 0.7,
                    delay: pathDuration,
                },
                translateZ: {
                    delay: pathDuration - 0.2,
                    duration: 0.6,
                },
            }}
            style={{
                transformPerspective: 2000,
                transformOrigin: 'center center',
            }}
            onAnimationComplete={() => {
                lightAnimation.start({
                    opacity: 0.2,
                    transition: {
                        duration: 2,
                    },
                });
            }}
        >
            <Box
                position='absolute'
                top={-1}
                left={-1}
                boxSize='calc(100% + 2px)'
                bgColor='white1'
                bgImage='radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),rgba(255,255,255,0)), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),rgba(255,255,255,0))'
                borderRadius='radius8'
            >
                <MotionBox
                    variants={imageVariants}
                    bg='linear-gradient(to bottom,rgba(95,106,210,0.2),rgba(255,255,255,0))'
                    boxSize='100%'
                    borderRadius='radius8'
                />
                {['horizontal', 'vertical'].map(direction => (
                    <Fragment key={direction}>
                        {lines.map(line => (
                            <MotionBox
                                key={line.repeatDelay}
                                bg={`linear-gradient(to ${
                                    direction === 'horizontal' ? 'left' : 'top'
                                },#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)`}
                                position='absolute'
                                height={direction === 'horizontal' ? 1 : 120}
                                maxWidth={direction === 'horizontal' ? 120 : 1}
                                width='100%'
                                zIndex={10}
                                borderRadius={2}
                                right={direction === 'horizontal' ? 'auto' : 0}
                                initial={{
                                    left: direction === 'horizontal' ? '0%' : 'auto',
                                    top: '0%',
                                    opacity: 0,
                                }}
                                animate={{
                                    left: direction === 'horizontal' ? '80%' : 'auto',
                                    top: direction === 'horizontal' ? '0%' : '80%',
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    ...line,
                                    repeat: Infinity,
                                    delay: direction === 'vertical' ? 2 : 0,
                                }}
                            />
                        ))}
                    </Fragment>
                ))}
            </Box>

            {/* Light */}
            <MotionBox
                position='absolute'
                top={0}
                left={0}
                boxSize='100%'
                bg='conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)'
                filter='blur(160px)'
                animate={lightAnimation}
                initial={{
                    opacity: 0,
                }}
            />

            <MotionSvg
                width='100%'
                viewBox='0 0 1499 778'
                fill='none'
                color='rgb(208, 214, 224)'
                position='absolute'
                opacity={0.2}
            >
                {paths.map(d => (
                    <motion.path
                        key={d}
                        variants={pathVariants}
                        d={d}
                        stroke='rgb(208, 214, 224)'
                        strokeWidth={1}
                    />
                ))}
            </MotionSvg>

            <MotionBox
                variants={imageVariants}
                transition={{
                    duration: 0.4,
                    delay: 0.6,
                }}
                onAnimationStart={() => {
                    lightAnimation.start({
                        opacity: 1,
                        transition: {
                            duration: 0.6,
                            delay: 0.5,
                        },
                    });
                }}
            >
                <Image
                    src={hero4x}
                    alt='Screenshot of the Linear app showing the sidebar for the Encom workspace and a few of their projects in the roadmap.'
                    borderRadius='radius8'
                    display='flex'
                />
            </MotionBox>
        </MotionBox>
    );
}
