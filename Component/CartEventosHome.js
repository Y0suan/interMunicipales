import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Cont = styled.div`
box-sizing: border-box;
border-left:2px solid black;
  margin: 0;
  padding: 5px;
  min-width: 270px;
  display: flex;
  /* box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30); */
  justify-content: center;
  .cont1{
    width: 100%;
  }
`;
const Title = styled.div`
width: 100%;
display:flex;
justify-content: space-evenly;
font-size:16px;
font-weight: 900;
`;
const Contenido = styled.div`
width: 100%;
display:flex;
justify-content: space-evenly;
font-size:14px;
font-weight: 700;
font-family: 'Roboto', sans-serif;

`;

const CartEventosHome = ({ evet }) => {
  return (
    <Cont>
        <div className='cont1'>
            <Title className='header'>
            <p className='A' >{evet.equipoA}</p>
            <p>vs</p>
            <p className='B' >{evet.equipoB}</p>
            </Title>
        <Contenido>
        <p>{evet.hubicacion}</p>
        <p>/</p>
        <p>{evet.hora}</p>
        <p>/</p>
        <p>{evet.fecha}</p>
        </Contenido>
        </div>
    </Cont>
  )
}

export default CartEventosHome