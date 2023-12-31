import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { IoFootballOutline } from 'react-icons/io5';



const Cont = styled.div`
  border:1px solid #1B1C20;
  box-sizing: border-box;
  margin: 0;
  padding: 5px;
  min-width: 250px;
  height:auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30);
  justify-content: center;
  color:black;
  border-radius:16px;
  .cont1{
    width: 100%;
  }
  p{
    padding: 0;
    margin: 0px 8px;
  }
`;
const Title = styled.div`
width: 100%;
display:flex;
justify-content: space-around;
font-size:14px;
font-weight: 700;
line-height: 10px;
font-family: 'Roboto', sans-serif;
`;
const Icon = styled.div`
display: flex;
align-items: center;
border-radius: 50%;
width: 100%;
height: 50px;
.icon{
  font-size: 2rem;
  color:black;
}
`;
const Contenido = styled.div`
display: flex;
font-family: 'Roboto', sans-serif;
p{
  font-size: 10px;
}
`;

const Sexo = styled.div`
width: 100%;
margin-bottom: 8px;
`;


const CartEventosHome = ({ evet , deportes }) => {

  return (
    <Cont>

     {evet.ganador && <p>GANADOR: {evet.ganador}</p>}

      <Icon>
      <Title className='header'>
            <p className='A' >{evet.equipoA}</p>
            <p>vs</p>
            <p className='B' >{evet.equipoB}</p>
      </Title>
      </Icon>
      <Sexo>
      {evet.properties && Object.keys(evet.properties).map((key, index) => (
                <p key={index}>
                  <strong>{key}:</strong> {evet.properties[key]}
                </p>
              ))}
      <p>
      {deportes.find(deporte => deporte._id === evet.category)?.name || 'Desconocido'}
      </p>
      </Sexo>
      <Contenido>
        <p>{evet.hubicacion}</p>
        <p>/</p>
        <p>{evet.hora}</p>
        <p>/</p>
        <p>{evet.fecha}</p>
      </Contenido>
    </Cont>
  )
}

export default CartEventosHome


