import { Link } from './styles'
import { Carousel } from 'react-responsive-carousel';
import { Box, Text } from '@chakra-ui/react'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function Carrousel() {
    return (
        <Box id='space' justifyContent='center' display='flex'>
            <Box
                h='100vh'
                w='60rem'
                flexDirection='column'
                textAlign='center'
                alignItems='center'
                justifyContent='center'
                mt='110px'
            >
                <Text fontSize='50px' fontWeight='500' pb='51px' justifyContent='flex-start' display='flex'>espaço kns</Text>
                <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} useKeyboardArrows autoFocus>
                    <Box>
                        <img src='/assets/academy.JPG' ></img>
                    </Box>
                    <Box>
                        <img src='/assets/academy2.JPG' ></img>
                    </Box>
                    <Box>
                        <img src='/assets/academy3.JPG' ></img>
                    </Box>
                    <Box>
                        <img src='/assets/academy4.JPG' ></img>
                    </Box>
                    <Box>
                        <img src='/assets/academy5.JPG' ></img>
                    </Box>
                </Carousel>
                <Text fontSize='19px' fontWeight='400' pt='55px'>Localizado no Clube Ascade, o espaço KNS conta com uma grande estrutura para práticas multidisciplinares. Nosso container foi inteiramente projetado para trazer conforto térmico e ventilação natural, evitando a aglomeração dos alunos em espaço fechado.
                    Quer conhecer? <Link href="https://app.tecnofit.com.br/ng/online-scheduling/campaign/1106" target="blank" >Marque uma aula experimental!</Link></Text>
            </Box>
        </Box>
    )
}