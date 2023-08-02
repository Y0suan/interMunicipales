import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';


const Cont = styled.div`
  margin: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  box-sizing: border-box;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  max-width: 1200px;
  padding: 20px;
  display: flex;
  flex-wrap:wrap;
`;

const Image = styled.div`
  width: auto;
  height: auto;
  border-radius: 8px;
`;

const Footer = styled.div`
width:100%;
height:auto;
padding:30px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1531861184681-f2de7dd72da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
background-repeat: no-repeat;
background-size: cover;
background-position: 10%;
border-radius: 16px;
color:white;
p{
  font-family: 'Roboto', sans-serif;

}
`

const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
`;

const Subtitle = styled(Link)`
border-radius: 16px;
background-color: white;
padding:8px;
  text-decoration: none;
  color:#1B1C20;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3.063rem;
  line-height:4rem;
  &:hover{
    background-color: #1B1C20;
    color: #D6FF00;
  }
  @media (max-width: 425px) {
      background-color: #1B1C20;
      color: #D6FF00;
   font-size: 2.063rem;

  }
`

export const AgendaDeEventos = () => {
  return (
    <Cont>
      <Footer>
        <Title>Agenda de Eventos</Title>
        <p>Mira las fechas de juego</p>
      </Footer>
      
      <Gallery>
        <Image >
          <Subtitle href={'/EventosFinalizados'} >eventos ya finalizados<AiOutlineArrowRight/> </Subtitle>
        </Image>
        <Image >
          <Subtitle href={'/EventosPendientes'} >eventos pendientes<AiOutlineArrowRight/></Subtitle>
        </Image>
      </Gallery>
    </Cont>
  );
};

