import { Link } from '@chakra-ui/react'

interface NavLinkProps {
    href: string;
    children: string;
    size: string;
}

export function NavLink({href, children, size}: NavLinkProps) {
    return (
        <Link fontWeight='400' fontSize={size} href={href} >{children}</Link>
    )
}