import { Stack } from '@chakra-ui/react'
import { BoxOnly } from '../Box/index'

export function BoxPlans() {

    const benefitsSimples = ['Lore Ipsun1', 'Lore Ipsun2', 'Lore Ipsun3', 'Lore Ipsun4', 'Lore Ipsun5']
    const benefitsCompleto = ['Lore Ipsun', 'Lore Ipsun', 'Lore Ipsun', 'Lore Ipsun', 'Lore Ipsun']

    return (
        <Stack
            as='section'
            id='plans'
            direction='row'
            minH='100vh'
            minW='100vw'
            justifyContent='center'
            align='center'
            spacing='170px'
        >
            <BoxOnly title='Simples' benefits={benefitsSimples} type='on-line' price='250' />
            <BoxOnly title='Completo' benefits={benefitsCompleto} type='presencial + on-line' price='330' />
        </Stack>
    )
}