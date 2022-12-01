import { Stack, Text, UnorderedList, ListItem, Button } from '@chakra-ui/react'

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
        >
            <Text fontFamily='Roboto' fontSize='30px' fontWeight='500' >{title}</Text>
            <Text>{type} R${price}</Text>
            {benefits.map((element, index) => {
                return (
                    <UnorderedList key={index}>
                        <ListItem>{element}</ListItem>
                    </UnorderedList>
                )
            })}
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