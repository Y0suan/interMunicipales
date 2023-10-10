import styled from 'styled-components'
import React from 'react'
import { Home } from '@/Component/Home';
import Header from '@/Component/Header';

import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/Category";
import { Evento } from '@/models/Eventos';
import Footer from '@/Component/footer';
import DeportesPage from './eventos';


const Cont = styled.div`
height: auto;

`;



export default function HomePage({eventos,categories}){
  return(
    <Cont>
    <Header/>
    <Home></Home>
   <DeportesPage/>
    <Footer></Footer>
    </Cont>
  );
}


export async function getServerSideProps() {
  try {
    await mongooseConnect();

    // Consultar todos los objetos en el modelo Category
    const categories = await Category.find({});
    
    // Consultar todos los eventos
    const eventos = await Evento.find({});
    
    return {
      props: {
        categories: JSON.parse(JSON.stringify(categories)),
        eventos: JSON.parse(JSON.stringify(eventos)),
      },
    };
  } catch (error) {
    console.error("Error al obtener las categorías y eventos:", error);
    return {
      props: {
        categories: [],
        eventos: [],
      },
    };
  }
}