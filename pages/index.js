import styled from 'styled-components'
import React from 'react'
import { Home } from '@/Component/Home';
import { AgendaDeEventos } from '@/Component/AgendaDeEventos';
import Header from '@/Component/Header';

import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/Category";
import { Enlases } from './Enlases';
import Footer from '@/Component/footer';
import Contador from './Contador';


const Cont = styled.div`


`;



export default function HomePage({categories}){
  return(
    <Cont>
      <Contador></Contador>
    <Header/>
    <Home></Home>
    <AgendaDeEventos></AgendaDeEventos>
    <Enlases></Enlases>
    <Footer></Footer>
    </Cont>
  );
}


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