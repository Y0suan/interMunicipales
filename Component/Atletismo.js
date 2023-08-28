import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsArrowUpRight } from 'react-icons/bs';


const Atletismo = () => {
  return (
    <StyledCont>
        <StyledHeader>
            <StyledMitad>
        <Title>Explora los resultados de atletismo</Title>
            </StyledMitad>
            <StyledMitad>
        <Text>Descubre a los atletas más destacados de nuestra competición. Con determinación, habilidad y pasión, estos participantes sobresalieron en sus disciplinas</Text>
        <StyledLink2 href={'/'} >Ver Clasificatoria</StyledLink2>
            </StyledMitad>
        </StyledHeader>
        <StyledFooter>
        {/* <StyledLink href={'/'} ><BsArrowUpRight className='icon' /></StyledLink> */}
        </StyledFooter>
    </StyledCont>
  )
}

export default Atletismo



const StyledCont = styled.div`
margin-top: 100px;
display:flex;
flex-direction: column;
align-items: center;
`;
const StyledHeader = styled.div`
width: 100%;
display:flex;
`;
const StyledMitad = styled.div`
width: 50%;

`;
const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  @media (max-width: 425px) {
  font-size:2.938rem;
  }`
const Text = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px; 
letter-spacing: 0.1px;
`

const StyledFooter = styled.div`
box-sizing: border-box;
margin-top:16px;
width: 90%;
height: 25vh;
padding:40px;
background-image: url('https://images.unsplash.com/photo-1587960583998-e8dae92c87ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80');
background-size: cover;
border-radius: 16px;
background-position: 20%;
display:flex;
justify-content: flex-start;
align-items: center;
`;

const StyledLink = styled(Link)`
padding:20px;
background-color: black;
border-radius: 50%;
color:black;
.icon{
    font-size: 2rem;
    background-color: #d6ff00;
    border-radius: 50%;
    padding:8px;
}
`;

const StyledLink2 = styled(Link)`
    color:#1B1C20;
    color:black;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid black;
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