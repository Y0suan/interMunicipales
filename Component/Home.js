import React from 'react'
import styled, { keyframes }  from 'styled-components'
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

const Cont = styled.div`
width: 100%;
height: auto;
box-sizing: border-box;
display: flex;
justify-content: center;
`
const Image = styled.div`
box-sizing: border-box;
padding:16px;
width: 100%;
background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(https://res.cloudinary.com/dp3imi0w7/image/upload/v1695635231/tirza-van-dijk-TEYrLTKKMSg-unsplash_q7iost.jpg);
background-size: cover;
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
`
const Title = styled.h1`
color: #FFF;
font-size:2.313rem;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
margin: 0px;
`

const ContTitle = styled.div`
max-width: 320px;
.small{
font-size: 3rem;
}
.big{
  font-size: 7rem;
  line-height: 6rem;
  text-align: center;
}
`


const ParrafoUno = styled.p`
color: #FFF;
font-size: 0.875rem;
font-style: normal;
line-height: normal;
font-family: 'Roboto Flex', sans-serif;
`






export const Home = () => {
  return (
    <Cont>
      <Image>
        <ContTitle>
        <Title className='small' >Inter Municipales</Title>
        <Title className='big' >2023</Title>
        </ContTitle>
        <ParrafoUno>Los equipos mostrarán sus habilidades y estrategias en el campo de juego mientras compiten por el título de campeón.</ParrafoUno>
      </Image>
    </Cont>
  )
}
