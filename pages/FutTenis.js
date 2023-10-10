import Header from '@/Component/Header';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import Footer from '@/Component/footer';

const ContPage = styled.div`
height: auto;
box-sizing: border-box;
`
const ContTop = styled.div`
box-sizing: border-box;
width: 100%;
padding: 16px;
background-image: url('https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
background-size: cover;
color:#fff;
.flex{
    display: flex;
    gap:16px;
}
h3{
    width:fit-content;
    background-color: rgba(255, 255, 255, 0.407);
    padding: 8px 16px;
    border-radius: 8px 16px;
}
`
const Title = styled.h1`
/* color: #1b1c20; */
color:#fff;
font-size:5rem;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
margin: 0px;
`


const ContReglamento = styled.div`
box-sizing: border-box;
width: 100%;
height: auto;
padding:16px;
.cont{
box-sizing: border-box;
    background-color: #000000;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding:16px;
    .title{
        font-size: 39px;
    }
    .cardCont{
        width: 100%;
        display:flex;
        gap:16px;
    }
    p{
        color:white;
        max-width: 600px;
        font-size: 19px;
    }
}
@media screen and (max-width:425px){
  .cardCont{
    flex-direction: column;
  }
}
`
const CarInfo = styled.div`
padding: 16px;
box-sizing: border-box;
border-radius: 8px;
max-width:300px;
width: fit-content;
height: min-content;
background-color: #28282A;
.subtitle{
    font-size: 31px;
    text-transform: none;
}
.parrafo{
    font-size: 21px;
    text-transform: none;
    font-weight: 600;
}
`
const ButtonLink = styled(Link)`

.icon{
height: 50px;
width: 50px;
    font-size:39px;
    text-decoration: none;
    color:white;
}
`

const Futsal = () => {
  return (
    <ContPage>
        <Header></Header>
        <ContTop>
        <Title>Futbol Tenis</Title>
        <div className='flex'>         
            <h3>Mixto</h3>
            <h3>Masculino</h3>
            <h3>Femenino</h3>
        </div>       
        </ContTop>
        <ContReglamento>
            <div className='cont' >
                <Title className='title'>
                   mira todo sobre el deporte 
                </Title>
                <p>En Olimpiadas Municipales, nos enfocamos exclusivamente en proporcionarte información detallada sobre nuestro evento deportivo. Encuentra todos los detalles necesarios para participar y disfrutar al máximo de esta emocionante competición local. ¡Tu camino hacia la victoria comienza aquí!</p>
                <div className='cardCont' >
                   <CarInfo>
                      <Title className='subtitle' >Descarga el reglamento</Title>
                      <ButtonLink href={'https://docs.google.com/document/d/1Z8BMXcPBaPW_9opBo2dImKjYqYq8vo6P/edit?usp=sharing&ouid=100664009406258689319&rtpof=true&sd=true'} target='_blank' > <HiOutlineDocumentArrowDown className='icon'/> </ButtonLink>
                   </CarInfo>
                   <CarInfo>
                      <Title className='subtitle' >El Sorteo se realizara el 12/10/23</Title>
                      <Title className='parrafo' >18hs Polideportivo Municipal 9km</Title>
                   </CarInfo>
                   <CarInfo>
                      <Title className='subtitle' >Proximamente....</Title>
                      <Title className='parrafo' >Podras encontrar informacion de cuando y donde se juega cada partido</Title>
                   </CarInfo>
                </div>
            </div>
        </ContReglamento>
        <Footer/>
    </ContPage>
  )
}

export default Futsal