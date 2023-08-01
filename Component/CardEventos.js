import React from 'react'
import styled from 'styled-components'

const CartCont = styled.div`
  width: 280px;
  height: 300px;
  background-color: white;
  border:1px solid #1B1C20 ;
  border-radius: 6px;
  overflow: hidden;
  padding:16px;
  color: #1B1C20 ;
`;

const Header = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 1.3rem;
  margin: 0;

`;

const Center = styled.div`
  border:1px solid #1B1C20 ;
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 6px;
  position: relative;
  h5{
    border-radius: 6px;
    text-transform: lowercase;
    font-size: 1.1rem;
  padding: 8px 16px;  
  background-color:#1B1C20;
  color: #D6FF00;
  position:absolute; 
  top:10px;   
  left:-10px;
  }

`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content:center;
  color:white;
  font-size: 1.25rem;
  font-weight: 700;
  .A{
  transition: 1s;
    text-align: center;
    color: white ;
    width: 48%;
    padding:6px;
    background-color: #1B1C20 ;
    clip-path: polygon(0% 0, 100% 0, 100% 0%, 80% 100%, 0 100%);
    border-radius: 6px;
  }
  .B{
  transition: 1s;
    text-align: center;
    width: 48%;
    padding:6px;
    color:white;
    background-color: #1B1C20 ;
    clip-path: polygon(20% 0, 100% 0, 100% 100%, 80% 100%, 0 100%);
    border-radius: 6px;

  }
  &:hover{
    .A{
    clip-path: polygon(0% 0, 100% 0, 100% 0%, 90% 100%, 0 100%);
    }
    .B{
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 80% 100%, 0 100%);
    }
  }
`;

export const CardEventos = ({evet}) => {
  return (
    <CartCont>
        <Header>
            <p>{evet.hubicacion}</p>
            <p>{evet.hora}</p>
        </Header>
        <Center>
            <h5>C Maculino</h5>
        </Center>
        <Footer>
            <p className='A' >{evet.equipoA}</p>
            <p className='B' >{evet.equipoB}</p>
        </Footer>
    </CartCont>
  )
}
