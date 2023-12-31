import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';

import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import { Escuela } from '@/models/Escuelas';
import { Delegados } from '@/models/Delegados';


const EscuelaPage = ({ escuela, filteredDelegados }) => {

  console.log(filteredDelegados);


  const allDelegados = filteredDelegados.reduce((acc, item) => {
    // Parsear los strings JSON en el array 'delegados'
    const delegados = item.delegados.map((delegadoStr) => JSON.parse(delegadoStr));
    return [...acc, ...delegados];
  }, []);

  return (
    <>
      <Header />
      <Cont>
        <ContInfo>
          <ContDepo> 
            <Title>Sigue a tu institución en todos sus eventos</Title>
            <LinkHover  href={'/EventosPendientes'} > <IoIosArrowForward className='icon' /></LinkHover>
          </ContDepo>

          <ContEscuela>
            <ContTitle>
              <Title>{escuela.title}</Title>
            </ContTitle>
             <ContEnEspera>
              <h3>Delegados</h3>
             <Title2>
             {allDelegados.map((delegado, index) => (
             <div key={index}>
             <p>{index+1} - {delegado.nombre}</p>
             </div>
             ))}
          </Title2>  
         </ContEnEspera>
          </ContEscuela>
        </ContInfo>
      </Cont>

      <Footer />
    </>
  );
};


export default EscuelaPage;

export async function getServerSideProps(context) {
  try {
    await mongooseConnect();
    const { id } = context.query;

    // Consulta para obtener la escuela por su ID
    const escuela = await Escuela.findById(id);

    // Verificar si se encontró la escuela
    if (!escuela) {
      return {
        notFound: true,
      };
    }

    const title = escuela.title;

    // Consulta para obtener los delegados asociados a la escuela con el mismo valor en la propiedad escuela
    const delegados = await Delegados.find({ escuela: title });

    return {
      props: {
        escuela: JSON.parse(JSON.stringify(escuela)),
        filteredDelegados: JSON.parse(JSON.stringify(delegados)),
      },
    };
  } catch (error) {
    console.error('Error al obtener la escuela:', error);
    return {
      props: {
        escuela: null,
        filteredDelegados: [],
      },
    };
  }
}






const Cont = styled.div`
margin:0;
padding:0;
width: 100%;
height:auto;
display: flex;
 flex-direction: column;
 align-items: center;
 box-sizing: content-box;
 box-sizing: border-box;
padding: 16px;
box-sizing: border-box;
`;

const ContTitle = styled.div`
width:100%;
height:auto;
padding:30px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1529160104159-7a5937a4a0a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
background-repeat: no-repeat;
background-size: cover;
background-position: 10%;
border-radius: 16px;
color:white;
box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
p{
  font-family: 'Roboto', sans-serif;

}
  .icon{
    font-size: 50px;
  }
  @media (max-width: 425px) {
width:100%;
height: auto;
}
`;


const ContInfo = styled.section`
box-sizing: border-box;
width: 100%;
display:flex;
gap:8px;
@media (max-width: 425px) {
width: 100%;
height: auto;
  flex-direction: column;
  }
`;
const ContEscuela = styled.div`
width: 70%;
height: auto;
display:flex;
flex-direction: column;
gap:8px;
@media (max-width: 425px) {
width: 100%;
height: auto;
  }
`;
const ContEnEspera = styled.div`
box-sizing: border-box;
padding:16px;
border-radius:16px;
width: 100%;
height: 80%;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1519432359516-73a2bb421826?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
background-size: cover;
display: flex;
justify-content: space-evenly; 
align-items: center;
box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
h3{
  text-transform: uppercase;
  font-weight: 900;
  font-size:4rem;
  line-height:1rem;
  color:#C6C7C8;
}
p{

}
@media (max-width: 425px) {
flex-direction: column;
  }
`;


const ContDepo= styled.section`
padding:16px;
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
gap:8px;
width: 400px;
height: 400px;
box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
border-radius: 16px;
background-color: #1B1C20;
color:white;
@media (max-width: 425px) {
width:90%;
height: auto;
justify-content: center;
align-items: center;
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
  font-size:2.938rem;   
  line-height:2.8rem;
  display:flex;
  }
`;

const Title2 = styled.div`
  margin:0;
  font-weight: 800;
  font-size:1.938rem;
  line-height:1.9rem;
  color:#C6C7C8;

  @media (max-width: 425px) {
  font-size:1.938rem;   
  }
`; 
const LinkHover = styled(Link)`
    color:#1B1C20;
    color:white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid white;
    padding:12px;
    border-radius: 16px;
    transition: 1s;
    .icon{
      font-size:1.5rem;
    }
    &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
    }
`;