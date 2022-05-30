import { Container, ContainerPlans, ContainerList, ContainerButton, ContainerInfo } from './styles';

export function Plans() {

    return (
        <Container>
            <ContainerPlans>
                <p>simples</p>
                <p className="title" ><strong>on-line</strong> R$250,00</p>
                <ContainerList>
                    <ol>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                    </ol>
                </ContainerList>
                <ContainerButton>
                    <button>eu quero!</button>
                </ContainerButton>
            </ContainerPlans>
            <ContainerPlans>
                <p>completo</p>
                <p className="title" ><strong>presencial + on-line</strong> R$330,00</p>
                <ContainerList>
                    <ol>
                    <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                        <li>Lore ipsum</li>
                    </ol>
                </ContainerList>
                <ContainerButton>
                    <button>eu quero!</button>
                </ContainerButton>
            </ContainerPlans>
            <ContainerInfo>
                <p>Ainda não sabe que plano se encaixa melhor nas suas necessidades? <span>Marque uma aula experimental</span> e venha conversar com a gente. </p>
            </ContainerInfo>
        </Container>
    )
}