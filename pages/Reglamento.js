import React from 'react'
import styled from 'styled-components';
import Link from "next/link";
import Header from '@/Component/Header';
import LinkReglamento from '@/Component/LinkReglamento';

import { mongooseConnect } from "@/lib/mongoose";
import Category from "@/models/Category";
import Footer from '@/Component/footer';

const Reglamento = ({categories}) => {
  return (
    <>
    <Header></Header>
    <Cont>
        <StyledTitle>
            <Title>
                Mira los Reglamentos Por Deporte
            </Title>
        </StyledTitle>
        <LinkReglamento deportes={categories} ></LinkReglamento>
    </Cont>
    <Footer></Footer>
    </>
  )
}

export default Reglamento


const Cont = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  gap:16px;
  padding:16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
  @media (max-width: 425px) {
  font-size:3rem;
  line-height:2.9rem;
  }
`;

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