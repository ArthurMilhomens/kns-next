import { HStack, Image } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export function HeaderMenu() {
    return (
        <HStack
            as='header'
            pt='10px'
            w='100%'
            justifyContent='center'
            spacing='3.125rem'
            position='sticky'
            top='0'
            zIndex='1'
            backdropFilter='auto'
            backdropBlur='0.5rem'
            bgGradient='linear(to-b, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))'
        >
            <NavLink size='1.25rem' href="#textMenu">Home</NavLink>
            <NavLink size='1.25rem' href="#plans">Planos</NavLink>
            <NavLink size='1.25rem' href="#space">Nosso Espaço</NavLink>
            <Image src='/assets/logo-white.png' alt='Academia KNS' w='4.375rem' h='4.375rem' />
            <NavLink size='1.25rem' href="#horarios">Horários</NavLink>
            <NavLink size='1.25rem' href="#ourVision">Nossa Visão</NavLink>
            <NavLink size='1.25rem' href="#contact">Contato</NavLink>
        </HStack>
    )
}