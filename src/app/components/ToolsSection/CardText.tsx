import { Text, VStack } from '@chakra-ui/react';
import { Balancer } from 'react-wrap-balancer';

export function CardText({ title, description }: { title: string; description: string }) {
    return (
        <VStack spacing='space16' width='100%'>
            <Balancer>
                <Text size='extraExtraLarge' textAlign='center'>
                    {title}
                </Text>
            </Balancer>
            <Balancer>
                <Text size='medium' color='secondary' textAlign='center'>
                    {description}
                </Text>
            </Balancer>
        </VStack>
    );
}
