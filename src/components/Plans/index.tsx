import { Container, ContainerPlans, P, Ptittle, Plist, OL, Button, ContainerList, ContainerButton, PInfo, Span, ContainerInfo } from './styles';

export function Plans() {

    return (
        <Container>
            <ContainerPlans>
                <P>simples</P>
                <Ptittle><strong>on-line</strong> R$250,00</Ptittle>
                <ContainerList>
                    <OL>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                    </OL>
                </ContainerList>
                <ContainerButton>
                    <Button>eu quero!</Button>
                </ContainerButton>
            </ContainerPlans>
            <ContainerPlans>
                <P>completo</P>
                <Ptittle><strong>presencial + on-line</strong> R$330,00</Ptittle>
                <ContainerList>
                    <OL>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                        <li><Plist>Lore ipsum</Plist></li>
                    </OL>
                </ContainerList>
                <ContainerButton>
                    <Button>eu quero!</Button>
                </ContainerButton>
            </ContainerPlans>
            <ContainerInfo>
            <PInfo>Ainda não sabe que plano se encaixa melhor nas suas necessidades? <Span>Marque uma aula experimental</Span> e venha conversar com a gente. </PInfo>
            </ContainerInfo>
        </Container>
    )
}