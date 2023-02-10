import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Text
} from '@chakra-ui/react'
import { WiTime4 } from "react-icons/wi";

export function TableTime() {
    return (
        <Box
            display='flex'
            id='horarios'
            minHeight='100vh'
            minWidth='100vw'
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
        >
            <Box display='flex' flexDirection='row' mb='30px' width='980px'>
                <WiTime4 size={25} />
                <Text ml='20px' fontSize='16px' fontWeight='300' >Segunda-feira à Sexta-feira de 07:00–09:00 & 19:00–21:00 / Sabádo de 11:00–12:00*</Text>
            </Box>

            <TableContainer border='solid 1px #FFFFFF'>
                <Table>
                    <Thead>
                        <Tr h='79px'>
                            <Th w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Segunda</Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Terça</Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Quarta</Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Quinta</Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Sexta</Th>
                            <Th textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Sábado</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>7H</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                        </Tr>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>8H</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                        </Tr>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>9H</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                        </Tr>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>10H</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                        </Tr>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>11H</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>Aula</Td>
                        </Tr>
                        <Tr h='79px'>
                            <Td textAlign='center' w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'>19H</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' bg='#FFFFFF' border='solid 1px #0C0C0C' color='#0C0C0C' fontSize='20px' fontWeight='400' textAlign='center'>Aula</Td>
                            <Td w='139px' border='solid 1px #FFFFFF' color='#FFFFFF' fontSize='20px' fontWeight='300'></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Box display='flex' w='980px' mt='5px' justifyContent='flex-end'>
                <Text fontSize='12px' fontWeight='300'>os horários podem sofrer alterações*</Text>
            </Box>


        </Box>
    )
}