import { Container, ContainerImage } from './styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export function OurVision() {
    return (
        <Container>
            <p className="first-text" >A KNS hoje é uma prática que considera corpo, movimento, diversão e interação. Nosso objetivo é mudar a visão da sociedade sobre a atividade física, mostrando que existem formas melhores e mais prazerosas de cuidar da saúde e alcançar o bem estar com a própria imagem. O processo desenvolvido para isso é inovador, livre, exploratório e motivador para o desenvolvimento de aptidões pessoais.</p>
            <p className="second-text" >Ser uma entidade imóvel é ser uma entidade influenciável e não uma entidade influenciadora. A capacidade do indivíduo de “SER” é exatamente a capacidade que ele tem de expressar sua individualidade no mundo. Sem movimento não existe expressão, existe apenas “estar”.
                Não buscamos transcender a humanidade, muito pelo contrário, buscamos apenas reaver a humanidade que foi perdida. Queremos ser agentes livres, agir de acordo com o que acreditamos e ter a capacidade de realizar os feitos que desejamos. A esfera física é apenas o meio pelo qual aprendemos a fazer isso.</p>
            <p className="title-text" >equipe kns</p>
            <Carousel>
                <ContainerImage>
                    <img src='/assets/academy3.JPG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
                <ContainerImage>
                    <img src='/assets/wagner.PNG' ></img>
                </ContainerImage>
            </Carousel>
                <p className="name-colaborator" >WAGNER TEIXEIRA BELCHIOR</p>
                <p className="description-text" >O Wagner é atualmente o facilitador das aulas e mente pensante por trás de todo o projeto.
                    Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo.
                    Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas.
                    E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação.
                    E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível. </p>
        </Container>
    )
}