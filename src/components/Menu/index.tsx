import { Container } from './styles'

export function Menu() {
    return (
        <Container>
            <ol>
                <li>
                    <a>Home </a>
                </li>
                <li>
                    <a>Planos </a>
                </li>
                <li>
                    <a>Nosso Espaço </a>
                </li>
                <li>
                    <img src='/assets/logo-white.png' />
                </li>
                <li>
                    <a>Horários </a>
                </li>
                <li>
                    <a>Nossa Visão </a>
                </li>
                <li>
                    <a>Contato </a>
                </li>
            </ol>
        </Container>
    )
}