import { Container, ContainerIMG } from './styles'

export function Space() {
    return (
        <Container>
            <p className="title" >espaço <span className="kns" >KNS</span></p>
            <ContainerIMG>
                <span>seta</span>
                <img src='/assets/academy3.JPG' ></img>
                <span>seta</span>
            </ContainerIMG>
            <p className="info" >Localizado no Clube Ascade, o espaço KNS conta com uma grande estrutura para práticas multidisciplinares. Nosso container foi inteiramente projetado para trazer conforto térmico e ventilação natural, evitando a aglomeração dos alunos em espaço fechado.
                Quer conhecer? <a href="https://app.tecnofit.com.br/ng/online-scheduling/campaign/1106" target="blank" >Marque uma aula experimental!</a></p>
        </Container>
    )

}