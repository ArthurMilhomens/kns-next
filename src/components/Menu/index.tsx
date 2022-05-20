import { Container, Ol, Li, A, Img } from './styles'

export function Menu() {
    return (
        <Container>
            <Ol>
                <Li>
                    <A>Home </A>
                </Li>
                <Li>
                    <A>Planos </A>
                </Li>
                <Li>
                    <A>Nosso Espaço </A>
                </Li>
                <Li>
                    <Img src='/assets/logo-white.png' />
                </Li>
                <Li>
                    <A>Horários </A>
                </Li>
                <Li>
                    <A>Nossa Visão </A>
                </Li>
                <Li>
                    <A>Contato </A>
                </Li>
            </Ol>
        </Container>
    )
}