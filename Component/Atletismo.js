import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs';


const Atletismo = () => {
  return (
    <StyledCont>
        <StyledHeader>
            <StyledMitad>
        <Title>Explora los diversos recorridos de la maratón</Title>
            </StyledMitad>
            <LinkMaraton>
                {/* <p>Explora la esencia competitiva de la maratón intercolegial, donde los recorridos se convierten en una prueba de fortaleza y espíritu deportivo. A lo largo de tres desafiantes trayectos, los estudiantes-atletas se enfrentarán no solo a las distancias, sino también a sus propios límites. Las calles de la ciudad se convierten en pistas de desafío, mientras que los vecindarios y las avenidas se transforman en telones de fondo de camaradería y rivalidad. Estos recorridos no solo coronarán a los campeones, sino que también forjarán memorias inolvidables de un día de competencia feroz y compañerismo duradero.</p> */}
            <StyledLink2 href={'/Maraton'} >Descubre los recorridos <BsArrowRight/></StyledLink2>
            </LinkMaraton>

        </StyledHeader>
    </StyledCont>
  )
}

export default Atletismo



const StyledCont = styled.div`
padding:16px;
height: auto;
display:flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
`;
const StyledHeader = styled.div`
width: 100%;
display:flex;
box-sizing: border-box;
padding:16px 0;
display:flex;
justify-content: center;
@media (max-width: 425px) {
flex-direction: column;
padding:16px 0;
  }
`;
const StyledMitad = styled.div`
padding: 16px;
width: 50%;box-sizing: border-box;
height: auto;
@media (max-width: 425px) {
width:100%;
padding:16px;
display:flex;
justify-content:center;
}
`;

const LinkMaraton = styled.div`
box-sizing: border-box;
  color:white;
  width: 50%;
  height: auto;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1597892657493-6847b9640bac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80');
  background-size:cover;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding:16px;
  box-sizing: border-box;
  @media (max-width: 425px) {
width:100%;
display:flex;
justify-content:center;
}
`;


const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  color:#1B1C20;
  @media (max-width: 425px) {
  font-size:3.938rem;
  line-height:60px;
}
`

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