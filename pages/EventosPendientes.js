import { ListaDeDeportes } from '@/Component/ListaDeDeportes';
import React from 'react'
import styled from 'styled-components';
import Link from "next/link";


import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/Category";
import Footer from '@/Component/footer';
import Header from '@/Component/Header';


const StyledCont = styled.div`
padding: 16px;
box-sizing: content-box;
`;

const StyledTitle = styled.div`
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
`;

const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
`;
const Title2 = styled.h3`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size:1.25rem;
  line-height:1.5rem;
  @media (max-width: 425px) {
    line-height:1.3rem;    
}
`;

const ContWhite = styled.div`
width: 50%;
font-size: small;
font-family: 'Roboto', sans-serif;
margin-top: 16px;
padding: 1rem;
background-color: #111111;
border-radius: 16px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:white;
.link{
    color:#1B1C20;
    color:white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid white;
    padding: 6px 12px;
    border-radius: 18px;
    transition: 1s;
    margin-bottom:16px ;
    &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
    }
}

@media (max-width: 425px) {
width: 100%;
    
}
`

const StyledHorizontal = styled.div`
display:flex;
gap:16px;
@media (max-width: 425px) {
flex-wrap:wrap;   
}
`;


const EventosPendientes = ({categories}) => {
  return (
    <StyledCont>
        <Header></Header>
        <StyledTitle>
        <Title>Agenda de Eventos</Title>
        <p>Mira las fechas de juego</p>
        </StyledTitle>

<StyledHorizontal>
        <ContWhite>
        <p>
        Si el evento que buscas ya finalizó, puedes buscar entre los resultados para ver los detalles y las estadísticas de dicho evento.
        </p>
        <Link href={'/'} className="link">
         Eventos Finalizados
        </Link>
        </ContWhite>
        <ContWhite>
        <Title2>
        Elige un deporte para conocer los partidos a jugar
        </Title2>
        </ContWhite>
        </StyledHorizontal>

        <ListaDeDeportes deportes={categories} ></ListaDeDeportes>
        <Footer></Footer>
    </StyledCont>
  )
}

export default EventosPendientes

export async function getServerSideProps() {
    try {
      await mongooseConnect();
  
      // Consultar todos los objetos en el modelo Category
      const categories = await Category.find({});
      return {
        props: {
          categories: JSON.parse(JSON.stringify(categories)),
        },
      };
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
      return {
        props: {
          categories: [],
        },
      };
    }
  }