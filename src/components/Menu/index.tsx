import { Container, Ol, Li, A, Img } from './styles'
import  Logo  from '../../assets/logo-white.png';

export function Menu() {
    return (
        <Container>
            <Ol>
                <Li>
                    <A>Home</A>
                </Li>
                <Li>
                    <A>Valores</A>
                </Li>
                <Li>
                    <A>Nosso Espaço</A>
                </Li>
                <Li>
                    <Img src={Logo} />
                </Li>
                <Li>
                    <A>Horários</A>
                </Li>
                <Li>
                    <A> Nossa Visão</A>
                </Li>
                <Li>
                    <A>Contato</A>
                </Li>
            </Ol>
        </Container>
    )
}