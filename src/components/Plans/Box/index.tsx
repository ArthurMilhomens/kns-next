import { Stack, Text, UnorderedList, ListItem, Button, Box } from '@chakra-ui/react'

interface BoxOnlyProps {
    title: string;
    benefits: string[];
    type: string;
    price: string;
}

export function BoxOnly({ title, benefits, type, price }: BoxOnlyProps) {
    return (
        <Stack
            w='472px'
            h='570px'
            border='1px solid #FFFFFF'
            bg='rgba(17, 17, 17, 0.9)'
            justifyContent='top'
            alignItems='center'
            p='54px 54px 10px 54px'
        >

            <Text fontFamily='Roboto' fontSize='30px' fontWeight='500' mb='69px'>{title}</Text>
            <Box width='350px' overflow='hidden'>
                <Text fontFamily='Roboto' fontSize='25px' fontWeight='500' mb='42px'><strong>{type}</strong> R${price}</Text>
                <Box bg='blue' mb='65px' maxH='210px' overflow='auto'>
                    {benefits.map((element, index) => {
                        return (
                            <UnorderedList key={index}>
                                <ListItem fontFamily='Roboto' fontSize='25px' fontWeight='300'>{element}</ListItem>
                            </UnorderedList>
                        )
                    })}
                </Box>
            </Box>
            <Button
                bg='#FC4031'
                color='#FFFFFF'
                h='50px'
                w='350px'
                borderRadius='60px'>
                <Text fontFamily='Roboto' fontSize='20px' fontWeight='400' >eu quero!</Text>
            </Button>
        </Stack>
    )
}