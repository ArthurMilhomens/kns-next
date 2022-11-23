import { useRef } from 'react'
import { NavLink } from '../HeaderMenu/NavLink'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
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
                    <DrawerHeader><Image src='/assets/logo-white.png' alt='Academia KNS' w='70px' h='70px' /></DrawerHeader>
                    <DrawerBody>
                        <VStack spacing='50px' >
                            <NavLink size='20px' href="#textMenu">Home</NavLink>
                            <NavLink size='20px' href="#plans">Planos</NavLink>
                            <NavLink size='20px' href="#space">Nosso Espaço</NavLink>
                            <NavLink size='20px' href="#horarios">Horários</NavLink>
                            <NavLink size='20px' href="#ourVision">Nossa Visão</NavLink>
                            <NavLink size='20px' href="#contact">Contato</NavLink>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}