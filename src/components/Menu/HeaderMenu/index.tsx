import { HStack, Image } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export function HeaderMenu() {
    return (
        <HStack
            as='header'
            pt='10px'
            w='100%'
            justifyContent='center'
            spacing='50px'
            position='sticky'
            top='0'
            zIndex='1'
            backdropFilter='auto'
            backdropBlur='8px'
            bgGradient='linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))'
        >
            <NavLink size='20px' href="#textMenu">Home</NavLink>
            <NavLink size='20px' href="#plans">Planos</NavLink>
            <NavLink size='20px' href="#space">Nosso Espaço</NavLink>
            <Image src='/assets/logo-white.png' alt='Academia KNS' w='70px' h='70px' />
            <NavLink size='20px' href="#horarios">Horários</NavLink>
            <NavLink size='20px' href="#ourVision">Nossa Visão</NavLink>
            <NavLink size='20px' href="#contact">Contato</NavLink>
        </HStack>
    )
}