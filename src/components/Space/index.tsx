import { Container, ContainerIMG, Title } from './styles'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
export function Space() {

    return (
        <Container>
                <Title>espaço kns</Title>
                <Carousel>
                        <ContainerIMG>
                                <img src='/assets/academy.JPG' ></img>
                        </ContainerIMG>
                        <ContainerIMG>
                                <img src='/assets/academy2.JPG' ></img>
                        </ContainerIMG>
                        <ContainerIMG>
                                <img src='/assets/academy3.JPG' ></img>
                        </ContainerIMG>
                        <ContainerIMG>
                                <img src='/assets/academy4.JPG' ></img>
                        </ContainerIMG>
                        <ContainerIMG>
                                <img src='/assets/academy5.JPG' ></img>
                        </ContainerIMG>
                </Carousel>
            
           
            <p className="info" >Localizado no Clube Ascade, o espaço KNS conta com uma grande estrutura para práticas multidisciplinares. Nosso container foi inteiramente projetado para trazer conforto térmico e ventilação natural, evitando a aglomeração dos alunos em espaço fechado.
                Quer conhecer? <a href="https://app.tecnofit.com.br/ng/online-scheduling/campaign/1106" target="blank" >Marque uma aula experimental!</a></p>
        </Container>
    )

}