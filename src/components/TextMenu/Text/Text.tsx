import { Stack, Text } from '@chakra-ui/react'
import { LineArea } from '../LineArea/LineArea'

export function MenuText() {
    return (
        <Stack
            id='textMenu'
            minW='100vw'
            minH='100vh'
            justifyContent='center'
            align='end'
        >
            <Stack mr='6.25rem' mb='9.375rem'>
                <Text fontSize='3.75rem' fontWeight='700' fontFamily='IstokWeb'>corpo, <Text as='span' color='red.100'>movimento</Text>,</Text>
                <Text pl='9.375rem' fontSize='3.75rem' fontWeight='700' fontFamily='IstokWeb'>diversão & interação</Text>
                <Stack pl='14.375rem' pt='0.75rem'>
                    <LineArea />
                </Stack>
            </Stack>
        </Stack>
    )
}