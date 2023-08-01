import React from "react";
import styled from 'styled-components';
import { FaRankingStar } from 'react-icons/fa6';
import Link from "next/link";
import { ListaDeDeportes } from "@/Component/ListaDeDeportes";

import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/Category";


const ContPage = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:#1B1C20;
padding: 16px 0px;
`

const ContHeaderPage = styled.div`
gap:16px;
width: 100%;
padding: 40px 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:#1B1C20;
.icon{
    font-size: 2.438rem;
}
p{
    padding: 24px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: #1B1C20;
color:white;

}
h1{
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.625rem;
  line-height:49px;
}
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
`
const ContBlack = styled.div`
width:90%;
border-radius: 16px;
background-image:linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80);
padding: 40px 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:white;
`
const ContWhite = styled.div`
/* border:1px solid #1B1C20; */
background-color: #111111;
width:90%;
border-radius: 16px;
padding: 16px 0px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:white;
`

const DeportesPage = ({categories}) => {
    console.log(categories)
  return (
    <ContPage>

      <ContHeaderPage>
        <ContBlack>
        <FaRankingStar className="icon"/>
        <h1>Elige un Deportes</h1>
        </ContBlack>
 
        <ContWhite>
        <p>
         Si el evento que buscas ya finalizó, puedes buscar entre los resultados para ver los detalles y las estadísticas de dicho evento. En caso de que el evento aún no esté creado, puedes acceder al panel de administración para crear y gestionar nuevos eventos.
        </p>
        <Link href={'/'} className="link">
         Eventos Finalizados
        </Link>
        </ContWhite>
      </ContHeaderPage>

      <ListaDeDeportes deportes={categories} />
    </ContPage>
  );
};

export default DeportesPage;



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