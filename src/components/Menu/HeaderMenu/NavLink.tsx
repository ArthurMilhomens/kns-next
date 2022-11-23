import { Link } from '@chakra-ui/react'

interface NavLinkProps {
    href: string;
    children: string;
}

export function NavLink({href, children}: NavLinkProps) {
    return (
        <Link fontWeight='400' fontSize='20px' href={href} >{children}</Link>
    )
}