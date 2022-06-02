import { Container, ContainerFinalInfo } from './styles';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

export function Contact() {
    return (
        <Container>
            <p className='number' ><BsWhatsapp size='20' /> <span>(61) 3548-1731</span></p>
            <p className='location' ><IoLocationSharp size='24' /> <span>SCES Trecho 2 Conjunto 10 Lote 18, Brasília - DF, 70200-002</span></p>
            <a href="https://app.tecnofit.com.br/ng/online-scheduling/campaign/1106" target="blank" ><button>marque sua aula experimental</button></a>
            <a href="https://api.whatsapp.com/send?phone=556135481731" target="blank" ><button>fale com a gente</button></a>
            <ContainerFinalInfo>
                <a href="https://www.google.com/maps/place/KNS/@-15.8164027,-47.8517355,18z/data=!4m8!1m2!2m1!1skns!3m4!1s0x0:0x44b7503911a0bab5!8m2!3d-15.8163793!4d-47.8510893?hl=pt-BR" target="blank"><img src='assets/Rectangle.png' /></a>
                <a className="insta-icon" href="https://www.instagram.com/accounts/login/?next=/knsbrasil/" target="blank" ><BsInstagram size='25' /></a>
                <p className='reserved' >© 2021 Todos os direitos reservados</p>
            </ContainerFinalInfo>

        </Container>
    )
}