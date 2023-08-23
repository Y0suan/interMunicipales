import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';



const CartCont = styled.div`
overflow:hidden;
position:relative;
  width: 300px;
  background-color: white;
  border:1px solid #1B1C20 ;
  border-radius: 18px;

  overflow: hidden;
  padding:8px;
  color: #1B1C20 ;
  font-family: 'Roboto', sans-serif;
  background-color: white;
  color: #1B1C20;
  transition: 0.9ms;
padding-bottom: 40px;

  /* &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
    } */
`;


const Body = styled.div`
display: flex;
.header{
    line-height: 8px;
    font-weight: 600;
}
div{
    display:flex;
    flex-wrap: wrap;
    gap: 0 8px ;
p{
    font-size:14px;
}
}
.cont1{
    padding: 8px;
    display:flex;
    flex-direction: column;
    width: 80%;
    line-height:0;
}
`;

const Btn = styled(Link)`
  border-radius: 18px;
  color: white;
display:flex;
justify-content: center;
align-items: center;
width: 20%;
text-decoration: none;
font-size:33px;
.icon{
  padding:8px;
  background-color: #1B1C20;
  border-radius: 18px;
  color:#D6FF00;
}
`;
const Categoria = styled.h4`
bottom:0;
left:-15px;
position :absolute;
padding: 15px 20px ;
      background-color: #1B1C20;
      color: #D6FF00;
      border-radius: 16px;
`;

export const CardEventos2 = ({evet}) => {
    const id = evet._id 
  const url = '/Eventos/' + id;

  return (
    <CartCont>
        <Body>
        <div className='cont1'>
            <div className='header'>
            <p className='A' >{evet.equipoA}</p>
            <p>vs</p>
            <p className='B' >{evet.equipoB}</p>
            </div>
        <div>
        <p>{evet.hubicacion}</p>
        <p>/</p>
        <p>{evet.hora}</p>
        <p>/</p>
        <p>{evet.fecha}</p>
        {evet.properties && Object.keys(evet.properties).map((key, index) => (
                <p key={index}>
                  <strong>{key}:</strong> {evet.properties[key]}
                </p>
              ))}
        </div>
        <Categoria>Categoría:{evet.properties?.Categoria}</Categoria>
    </div>
    </Body>
    </CartCont>
  )
}
