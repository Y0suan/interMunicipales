import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs';


export const NuevoHome = () => {
  return (
    <Cont>
        <ContImg>
            <Title>Mira los resultados de atletismo</Title>
            <StyledLink2 href={'https://drive.google.com/file/d/1tP-Y8k_BuYnT9AHm-8iD8SUfHMjdo3lV/view?usp=sharing'} target='_blank' >Descarga resultados<BsArrowRight/></StyledLink2>
        </ContImg>
    </Cont>
  )
}


const Cont = styled.div`
width: 100%;
height: auto;
box-sizing: border-box;
padding:16px;
`;

const ContImg = styled.div`
width: 100%;
height: auto;
background-image: url(https://res.cloudinary.com/dzqdjsrez/image/upload/v1694425603/photo-1457470572216-1240fac24b37_2_ygltaz.png);
border-radius: 16px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;

const Title = styled.h1`
  padding:0px 31px; 
  text-align: start;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  color:white;
  @media (max-width: 425px) {
  font-size:2.938rem;
  line-height:40px;
}
`;
const StyledLink2 = styled(Link)`
    height: auto;
    color:White;
    text-decoration: none;
    font-size: 2.25rem;
    font-weight: bold;
    /* border: 1px solid white; */
    padding: 6px 12px;
    border-radius: 18px;
    transition: 1s;
    margin-bottom:16px ;
    display: flex;
    justify-content:center;
    align-items: center;
    gap:8px;
    &:hover{
        color:#D6FF00;
        /* border: 1px solid white; */
        background-color: #1B1C20;
    }
`;