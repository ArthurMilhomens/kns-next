import { Container } from './styles'

export function Menu() {
    return (
        <Container>
            <ol>
                <li>
                    <a href="#textMenu">Home</a>
                </li>
                <li>
                    <a href="#plans">Planos </a>
                </li>
                <li>
                    <a href="#space">Nosso Espaço </a>
                </li>
                <li>
                    <img src='/assets/logo-white.png' />
                </li>
                <li>
                    <a href="#horarios" >Horários </a>
                </li>
                <li>
                    <a href="#ourVision" >Nossa Visão </a>
                </li>
                <li>
                    <a href="#contact">Contato </a>
                </li>
            </ol>
        </Container>
    )
}