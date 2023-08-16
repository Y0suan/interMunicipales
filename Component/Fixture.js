import React from 'react'
import styled from 'styled-components';
import Link from "next/link";



const Fixture = () => {
  return (
    <Cont>
        <Image>
        <Title>
        Mira los fixture de clasificación
        </Title>
        <LinkHover href={'/fixtures'} >Fixtures</LinkHover>
        </Image>
    </Cont>
  )
}

export default Fixture

const Cont = styled.div`
box-sizing: border-box;
padding: 16px;
`

const Image = styled.div`
box-sizing: border-box;
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
gap:8px;
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

const LinkHover = styled(Link)`
    color:#1B1C20;
    color:white;
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: bold;
    border: 1px solid white;
    padding: 6px 40px;
    border-radius: 18px;
    transition: 1s;
    margin-bottom:16px ;
    &:hover{
        color:#D6FF00;
        border: 1px solid white;
        background-color: #1B1C20;
    }
`;