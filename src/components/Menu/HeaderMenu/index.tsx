import { HStack, Image } from '@chakra-ui/react'
import { NavLink } from './NavLink'

export function HeaderMenu() {
    return (
        <HStack
            pt='0.1rem'
            w='100%'
            justifyContent='center'
            spacing='50px'
            position="fixed"
            zIndex='auto'
        >
            <NavLink href="#textMenu">Home</NavLink>
            <NavLink href="#plans">Planos</NavLink>
            <NavLink href="#space">Nosso Espaço</NavLink>
            <Image src='/assets/logo-white.png' alt='Academia KNS' w='70px' h='70px' />
            <NavLink href="#horarios">Horários</NavLink>
            <NavLink href="#ourVision">Nossa Visão</NavLink>
            <NavLink href="#contact">Contato</NavLink>
        </HStack>
    )
}