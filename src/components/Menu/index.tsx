import { HeaderMenu } from './HeaderMenu'
import { SideBar } from './SideBar'
import { useBreakpointValue, Box } from "@chakra-ui/react";

export function Menu() {
    const isDrawerSidebar = useBreakpointValue({
        base: true,
        lg: false,
    })

    return (
        <Box
            position='sticky'
            top='0'
            zIndex='100'
        >
            {isDrawerSidebar ? <SideBar /> : <HeaderMenu />}
        </Box>
    )
}