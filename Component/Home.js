import React from 'react'
import styled, { keyframes }  from 'styled-components'
import { BiSolidRightArrow } from 'react-icons/bi';
import Link from 'next/link';

const Cont = styled.div`
width: 100%;
height: 100vh;
display :flex;
flex-direction: column;
box-sizing: border-box;
padding:16px;

`

const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  @media (max-width: 425px) {
  font-size:2.938rem;
    
  }

`
const Subtitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3.063rem;
  line-height:49px;
`
const Text = styled.h4`
  text-align: center;
  font-weight: 400;
  font-size: 1.438rem;
  line-height:49px;
`

const Header = styled.div`
width:100%;
height:40%;
display: flex;
flex-direction: column;
align-items: center;
padding:30px 0px;
color:#1B1C20;
display:flex;
align-items: center;
justify-content:center;

`


const Footer = styled.div`
width:100%;
height:60%;
padding:0px 0;
padding-top:30px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
background-repeat: no-repeat;
background-size: cover;
border-radius: 16px;
color:white;
`
const ContLink = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
align-items: center;
gap:16px;
p{
    width:300px;
    font-family: 'Roboto', sans-serif;
    font-size: .8rem;
}
div{
    display: flex;
    align-items: center;
    gap:8px;
}
`

const ArrowLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
max-height: 20px;
max-width: 20px;
border-radius: 50%;
padding: 12px;
background-color: white;
color: #1B1C20;
.icon{
    font-size: 10px;
}
`


export const Home = () => {
  return (
    <Cont>
        <Header>
            <p>Eldorado Misiones</p>
        <Title>Olimpiadas Estudiantiles</Title>
        </Header>
        <Footer>   
            <Title>    
                representa a tu escuela 
            </Title>
            <ContLink>
                <p>
                solo los delegados con permisos  de la institucion podran realizar las inscripciones 
                </p>
            </ContLink>
        </Footer>
    </Cont>
  )
}
