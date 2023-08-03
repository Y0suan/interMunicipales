import React from 'react'
import styled from 'styled-components';
import Link from "next/link";


const Enlases = () => {
  return (
    <Cont>
        <ContVertical>
        <ContWhite>
            <p>
            Leer el reglamentos de Olimpiadas Estudiantiles asegura éxito, respeto, evita descalificaciones y prepara adecuadamente a los competidores. 
            </p>
            <Link className='link' href={'https://drive.google.com/file/d/1-GNWQnDhKQFiXo-COjg73s881gNBL0-c/view?usp=sharing'} target='_blank' rel='noopener noreferrer' >Reglamento</Link>
        </ContWhite>
        <LinkReglamento>
        <LinkHover href={'/Reglamento'} >Reglamento por Deporte</LinkHover>
        </LinkReglamento>
        </ContVertical>
        <ContVertical>
        <LinkEscuelas>
        <Title>Descubre quienes participan</Title>
        <LinkHover href={'/Participantes'} >Participantes</LinkHover>
        </LinkEscuelas>
        </ContVertical>
    </Cont>
  )
}

export default Enlases;

const Cont = styled.div`
  width: 100%;
  height: auto;
  display:flex;
  gap:16px;
  padding:16px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 425px) {
    
  }
`;


const ContVertical = styled.div`
  width: 30%;
  height: 100%;
  height: auto;
  display:flex;
  flex-direction: column;
  gap:16px;
  box-sizing: border-box;
  @media (max-width: 768px) {
  width: 100%;
    
  }
`;

const LinkReglamento = styled.div`
  width: 100%;
  height: 400px;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80');
  background-size:cover;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding:16px;
  box-sizing: border-box;
`;

const ContWhite = styled.div`
  box-sizing: border-box;
width: 100%;
height: fit-content ;
font-size: small;
font-family: 'Roboto', sans-serif;
margin-top: 16px;
padding: 1rem;
background-color: #111111;
border-radius: 16px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
color:white;
p{
  font-family: 'Roboto', sans-serif;
  text-align: center;
}
.link{
    color:#1B1C20;
    color:white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid white;
    padding: 6px 12px;
    border-radius: 18px;
    transition: 1s;
    margin-bottom:16px ;
    &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
    }
}

@media (max-width: 425px) {
width: 100%;
    
}
`
const LinkHover = styled(Link)`
    color:#1B1C20;
    color:white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid white;
    padding: 6px 12px;
    border-radius: 18px;
    transition: 1s;
    margin-bottom:16px ;
    &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
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
  font-size:3.938rem;
  line-height:60px;
}
`;


const LinkEscuelas = styled.div`
  width: 100%;
  height: 80vh;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1617646339087-654bc92e57c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
  border-radius: 16px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color:white;
  gap:16px;
`;