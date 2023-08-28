import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import React from 'react'
import styled from 'styled-components';
import { ListaDeDeportes } from '@/Component/ListaDeDeportes';
import Category from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import { ListaDeDeportesFin } from '@/Component/ListaDeDeportesFin';


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
const ContTitle = styled.div`
width:100%;
height:60%;
padding:40px 0;
padding-top:30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
background-repeat: no-repeat;
background-size: cover;
border-radius: 16px;
color:white;
`

// const Title = styled.h1`
//   margin:0;
//   text-align: center;
//   text-transform: uppercase;
//   font-weight: 900;
//   font-size:4.938rem;
//   line-height:70px;
//   @media (max-width: 425px) {
//   font-size:2.938rem;   
//   }

// `
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




const EventosFinalizados = ({categories}) => {
  return (
    <>
    <Header></Header>
    <Cont>
    <ContTitle>   
            <Title>    
                Mira los Resultados de los eventos 
            </Title>
        </ContTitle>
        <ListaDeDeportesFin deportes={categories} ></ListaDeDeportesFin>
    </Cont> 
    <Footer></Footer>
    </>

  )
}

export default EventosFinalizados

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