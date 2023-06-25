import { Image, MotionBox, MotionSvg } from '@/components';
import { Box } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import hero4x from '@/assets/hero@4x.webp';

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
                amount: 0.8,
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
                top={0}
                left={0}
                boxSize='100%'
                bgColor='white1'
                bgImage='radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),rgba(255,255,255,0)), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),rgba(255,255,255,0))'
            />

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
                <motion.path
                    variants={pathVariants}
                    d='M1500 72L220 72'
                    stroke='rgb(208, 214, 224)'
                    strokeWidth={1}
                />
                <motion.path
                    variants={pathVariants}
                    d='M1500 128L220 128'
                    stroke='rgb(208, 214, 224)'
                    strokeWidth={1}
                />
                <motion.path
                    variants={pathVariants}
                    d='M1500 189L220 189'
                    stroke='rgb(208, 214, 224)'
                    strokeWidth={1}
                />
                <motion.path
                    variants={pathVariants}
                    d='M220 777L220 1'
                    stroke='rgb(208, 214, 224)'
                    strokeWidth={1}
                />
                <motion.path
                    variants={pathVariants}
                    d='M538 777L538 128'
                    stroke='rgb(208, 214, 224)'
                    strokeWidth={1}
                />
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
