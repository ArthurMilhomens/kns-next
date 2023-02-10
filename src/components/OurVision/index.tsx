import { useState } from 'react';
import { Container, MySlider, Arrow } from './styles';
import Slider from "react-slick";
import { StaticImageData } from 'next/image';
import { TiArrowBack, TiArrowForward } from 'react-icons/ti';
import { Box } from '@chakra-ui/react'

export function OurVision() {
    const [imageIndex, setImageIndex] = useState(0);

    const settings = {
        centerMode: true,
        infinity: true,
        centerPadding: '0',
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 300,
        beforeChange: (current: any, next: any) => setImageIndex(next)
    }

    const infoArray = [
        { imagem: 'assets/academy.JPG', nome: 'WAGNER TEIXEIRA BELCHIOR', descricao: "O Wagner é atualmente o facilitador das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy2.JPG', nome: 'IGOR TOLOMINHOS DE PAULA', descricao: "O Igor é atualmente o dificultador das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy3.JPG', nome: 'AUGUSTO MENDES CASADO RECEM', descricao: "O Augusto é atualmente o homem das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy4.JPG', nome: 'MARCIA CLARA MARIA SANTANA', descricao: "A Clara é atualmente o barulho das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy5.JPG', nome: 'ARTHUR MILLIONE MILIOR GOD', descricao: "O Arthur é atualmente o mestre das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy.JPG', nome: 'WAGNER TEIXEIRA BELCHIOR', descricao: "O Wagner é atualmente o facilitador das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy2.JPG', nome: 'IGOR TOLOMINHOS DE PAULA', descricao: "O Igor é atualmente o dificultador das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy3.JPG', nome: 'AUGUSTO MENDES CASADO RECEM', descricao: "O Augusto é atualmente o homem das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy4.JPG', nome: 'MARCIA CLARA MARIA SANTANA', descricao: "A Clara é atualmente o barulho das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." },
        { imagem: 'assets/academy5.JPG', nome: 'ARTHUR MILLIONE MILIOR GOD', descricao: "O Arthur é atualmente o mestre das aulas e mente pensante por trás de todo o projeto. Tem a educação física na sua base de formação e enxerga o exercício físico como uma excelente forma de encontrar propósito, aprender sobre si e sobre como navegar o mundo. Foi aí nessa compreensão que nasceu a sementinha da KNS. Interagir com o corpo é interagir com o mundo e é por isso que não acreditamos em uma única atividade física como completa ou ideal, já que temos corpos diversos e realidades diversas. E se tem uma coisa que o Wagner sempre diz é que o grande valor da prática reside no grupo, no coletivo, na união. Por isso falamos que a KNS é corpo, movimento, diversão & muuuita interação. E sem esse senso de humor e leveza com que ele conduz a prática, nada disso seria possível." }
    ]

    return (
        <Box
        minHeight='100vh'
        minWidth='100vw'
        bg='blue'
        >

        </Box>
        // <>
        //     <Container id="ourVision">
        //         <p className="first-text" >A KNS hoje é uma prática que considera corpo, movimento, diversão e interação. Nosso objetivo é mudar a visão da sociedade sobre a atividade física, mostrando que existem formas melhores e mais prazerosas de cuidar da saúde e alcançar o bem estar com a própria imagem. O processo desenvolvido para isso é inovador, livre, exploratório e motivador para o desenvolvimento de aptidões pessoais.</p>
        //         <p className="second-text" >Ser uma entidade imóvel é ser uma entidade influenciável e não uma entidade influenciadora. A capacidade do indivíduo de “SER” é exatamente a capacidade que ele tem de expressar sua individualidade no mundo. Sem movimento não existe expressão, existe apenas “estar”.
        //             Não buscamos transcender a humanidade, muito pelo contrário, buscamos apenas reaver a humanidade que foi perdida. Queremos ser agentes livres, agir de acordo com o que acreditamos e ter a capacidade de realizar os feitos que desejamos. A esfera física é apenas o meio pelo qual aprendemos a fazer isso.</p>
        //         <p className="title-text" >equipe kns</p>
        //         <MySlider>
        //             <Slider {...settings}>
        //                 {infoArray.map((e, index) => (
        //                     <div key={index} className={index === imageIndex ? 'slide activeSlide' : 'slide'}>
        //                         <img src={e.imagem} alt={e.nome} />
        //                     </div>
        //                 ))}
        //             </Slider>
        //         </MySlider>
        //         <p className="name-colaborator" >{infoArray[imageIndex].nome}</p>
        //         <p className="description-text" >{infoArray[imageIndex].descricao}</p>
        //     </Container>
        // </>
    )
}