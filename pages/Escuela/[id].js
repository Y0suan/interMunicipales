import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaRankingStar } from 'react-icons/fa6';

import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import  Escuela  from '@/models/Escuelas';



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

const EscuelaPage = ({ escuela }) => {
  return (
    <>
      <Header />
      <Cont>
        <ContTitle>
          <FaRankingStar className='icon' />
          <Title>{escuela.title}</Title>
        </ContTitle>
      </Cont>
      <Footer />
    </>
  );
};

export default EscuelaPage;

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const escuela = await Escuela.findById(id);

  return {
    props: {
      escuela: JSON.parse(JSON.stringify(escuela)),
    },
  };
}