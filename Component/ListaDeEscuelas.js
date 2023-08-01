import React from 'react';
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";

const ContPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#1B1C20;
  padding: 16px 0px;
`;

const Title = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.625rem;
  }
`;

const Deporte = styled(Link)`
  text-decoration: none;
  color:#1B1C20;
  border-radius: 18px;
  width: 40%;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding: 16px;
  border:1px solid #1B1C20;
  background-color: white;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  h4 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.625rem;
  }
  p {
    font-size: 1.625rem;
    font-weight: bold;
    background-color: #1B1C20;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    padding: 4px;
  }
  .icon{
    font-size: 1.625rem;
  }
  &:hover{
  background-color: #1B1C20 ;
  color: #D6FF00;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap:16px;
  }
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

const ContCart = styled.div`
width: 100%;
padding: 16px;
display: flex;
flex-wrap: wrap;
gap:16px;
justify-content: center;
`;

export const ListaDeEscuelas = ({ escuelas }) => {
  return (
    <ContPage>
      <Title>
        <h1>Participantes</h1>
        <p></p>
      </Title>
      <ContCart>
      {escuelas.map((e, index) => (
        <Deporte key={e._id} href={'/deportes/' + e._id}>
          <div>
          <img src={e.escudo} ></img>
          <h4>{e.title}</h4>
          </div>
          <AiOutlineArrowRight className='icon'/>
        </Deporte>
      ))}
      </ContCart>
    </ContPage>
  );
};
