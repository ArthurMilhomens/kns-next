import { useRef } from 'react'
import { NavLink } from '../HeaderMenu/NavLink'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Image,
    VStack
} from '@chakra-ui/react'

export function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Button ref={btnRef} bg='black' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent bg='black.900' alignItems='center'>
                    <DrawerCloseButton />
                    <DrawerHeader><Image src='/assets/logo-white.png' alt='Academia KNS' w='4.375rem' h='4.375rem' /></DrawerHeader>
                    <DrawerBody>
                        <VStack spacing='3.125rem' >
                            <NavLink size='1.25rem' href="#textMenu">Home</NavLink>
                            <NavLink size='1.25rem' href="#plans">Planos</NavLink>
                            <NavLink size='1.25rem' href="#space">Nosso Espaço</NavLink>
                            <NavLink size='1.25rem' href="#horarios">Horários</NavLink>
                            <NavLink size='1.25rem' href="#ourVision">Nossa Visão</NavLink>
                            <NavLink size='1.25rem' href="#contact">Contato</NavLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}