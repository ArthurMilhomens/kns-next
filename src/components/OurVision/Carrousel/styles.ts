import styled from 'styled-components'

export const MySlider = styled.div`
  width: 1350px;
  height: 500px;
  text-align: center;
  justify-content: center;
  align-items: center;
    .slick-initialized{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-active {
    justify-content: center;
    display: flex;
  }
`

interface ImageContainerProps {
  active: boolean;
}

export const ImageContainer = styled.div<ImageContainerProps>`
  transform: ${props => props.active ? 'scale(0.4)' : 'scale(0.2)'};
  opacity: ${props => props.active ? 1 : .5};
  transition: transForm 300ms;
  border-radius: 100%;
  width: 32rem !important;
  height: 32rem;

  img {
    width: 32rem;
    height: 32rem;
    border-radius: 100%;

  }
`