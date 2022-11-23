import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            '100': '#e1e1e6',
            '300': '#a8a8b3',
            '700': '#323238',
            '800': '#29292e',
            '850': '#1f2729',
            '900': '#121214'
        },
        red: {
            '100': '#FC4031'
        },
        black: {
            '100': 'rgba(0, 0, 0, 0.1)'
        }
    },
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    styles: {
        global: {
            body: {
                bg: 'gray.900',
                color: 'gray.100'
            }
        }
    }
})