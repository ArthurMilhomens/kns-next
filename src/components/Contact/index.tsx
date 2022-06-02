import { Container, ContainerFinalInfo } from './styles';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

export function Contact() {
    return (
        <Container>
            <p className='number' ><BsWhatsapp size='20' /> <span>(61) 3548-1731</span></p>
            <p className='location' ><IoLocationSharp size='24' /> <span>SCES Trecho 2 Conjunto 10 Lote 18, Brasília - DF, 70200-002</span></p>
            <button>marque sua aula experimental</button>
            <button>fale com a gente</button>
            <ContainerFinalInfo>
                <img src='assets/map.jpg' />
                <BsInstagram size='25' />
                <p className='reserved' >© 2021 Todos os direitos reservados</p>
            </ContainerFinalInfo>

        </Container>
    )
}