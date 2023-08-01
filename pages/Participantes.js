import Header from '@/Component/Header';
import React from 'react'
import styled from 'styled-components';

import { mongooseConnect } from "@/lib/mongoose";
import { Escuela } from '@/models/Escuelas';
import { ListaDeEscuelas } from '@/Component/ListaDeEscuelas';
import Footer from '@/Component/footer';

const Participantes = ({escuelas}) => {
  return (
    <>
      <Header />
      <Cont>
        <ContBlack>
          <Title>Mira quienes participan</Title>
        </ContBlack>
        <ListaDeEscuelas escuelas={escuelas} ></ListaDeEscuelas>
      </Cont>
      <Footer></Footer>
    </>
  )
}

export default Participantes

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

const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
`;


export async function getServerSideProps() {
  try {
    await mongooseConnect();

    // Consultar todos los objetos en el modelo Escuela
    const escuelas = await Escuela.find({});
    return {
      props: {
        escuelas: JSON.parse(JSON.stringify(escuelas)),
      },
    };
  } catch (error) {
    console.error("Error al obtener las escuelas:", error);
    return {
      props: {
        escuelas: [],
      },
    };
  }
}
