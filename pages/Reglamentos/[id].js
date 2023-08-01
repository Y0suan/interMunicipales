import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaRankingStar } from 'react-icons/fa6';

import Category from '@/models/Category';
import { Evento } from '@/models/Eventos';
import { CardEventos } from '@/Component/CardEventos';
import { CardEventos2 } from '@/Component/CardEventos2';
import Header from '@/Component/Header';

const Cont = styled.div`
margin:0;
padding:0;
width: 100%;
display: flex;
 flex-direction: column;
 align-items: center;
 box-sizing: content-box;
 box-sizing: border-box;
 padding:16px;

`;

const ContTitle = styled.div`
width:100%;
margin-bottom: 16px;
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
  .icon{
    font-size: 50px;
  }
`;


const ContText = styled.div`
width: 90%;
background-color: #111111;
padding:16px;
border-radius: 16px;
p{
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color:white;
}
`;

const ContCart = styled.div`
display: flex;
align-items:center;
justify-content: center;
flex-wrap: wrap;
gap:16px;
width: 90%;
`;

const Title = styled.h1`
  font-size: 36px;
  line-height: 30px;
  font-weight: 600;
`;

const DeportesHome = ({ deporte }) => {

  const paragraphs = deporte.reglamento.split('. ')

  return (
    <> 
    <Header></Header>   
    <Cont>
      <ContTitle>
        <FaRankingStar className='icon'/>
      <Title>{deporte.name}</Title>
      </ContTitle>    
      <ContText> 
     {paragraphs.map((paragraph, index) => (
          <React.Fragment key={index}>
            <p>{paragraph}</p>
          </React.Fragment>
        ))}
        </ContText> 
    </Cont>
    </>
  );
};

export default DeportesHome;

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const deporte = await Category.findById(id);

  // Obtén los eventos cuya propiedad "category" sea igual al ID del deporte
  const eventos = await Evento.find({ category: deporte._id });

  return {
    props: {
      deporte: JSON.parse(JSON.stringify(deporte)),
      eventos: JSON.parse(JSON.stringify(eventos)),
    },
  };
}
