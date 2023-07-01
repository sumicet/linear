import { Icon } from '@/components';
import { Box, HStack, Input, Text, VStack } from '@chakra-ui/react';

const options = [
    {
        name: 'Assign to...',
        type: 'assign',
    },
    {
        name: 'Change status...',
        type: 'status',
    },
    {
        name: 'Change priority...',
        type: 'priority',
    },
    {
        name: 'Add labels...',
        type: 'label',
    },
] as const;

export function CommandLine() {
    return (
        <VStack
            border='1px solid var(--linear-colors-white10)'
            bg='white10'
            boxShadow='rgba(0, 0, 0, 0.35) 0px 7px 32px'
            borderRadius='radius8'
            maxWidth={640}
            width='100%'
            opacity={0.6}
            alignItems='flex-start'
        >
            <Box
                marginLeft='space20'
                marginTop='space8'
                borderRadius='radius4'
                bg='white5'
                paddingX='space8'
            >
                <Text size='bodyXXS' color='white50'>
                    LIN-111 Walkway lighting
                </Text>
            </Box>
            <Input placeholder='Type a command or search...' />
            <VStack spacing={0} width='100%' alignItems='flex-start'>
                {options.map(({ name, type }) => (
                    <HStack key={name} spacing='space12' height={46} paddingX='space20'>
                        <Icon type={type} boxSize='space16' color='#8A8F98' />
                        <Text size='bodyS'>{name}</Text>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    );
}
