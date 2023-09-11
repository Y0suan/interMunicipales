import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BsArrowRight } from 'react-icons/bs';


const AtletismoHome = () => {
  return (
    <StyledCont>
        <StyledBlack>
            <LinkMitad></LinkMitad>
            <LinkMitad></LinkMitad>

        </StyledBlack>
    </StyledCont>
  )
}

export default AtletismoHome



const StyledCont = styled.div`
padding:16px;
height: auto;
display:flex;
flex-direction: column;
align-items: center;
box-sizing: border-box;
background-color: black;
`;
const StyledBlack = styled.div`
width: 100%;
height: 80vh;
display:flex;
box-sizing: border-box;
gap:16px;
display:flex;
justify-content: center;
@media (max-width: 425px) {
flex-direction: column;
padding:16px 0;
  }
`;


const LinkMitad = styled.div`
width: 50%;
height: 100%;
background-color:red;
`;

const LinkMaraton = styled.div`
box-sizing: border-box;
  color:white;
  width: 100%;
  height: auto;
  background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1516487200032-8532cb603261?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80');
  background-size:cover;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding:24px;
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
  color:white;
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
    justify-content: space-evenly;
    flex-direction: row;
    gap:8px;
    &:hover{
        color:#D6FF00;
        /* border: 1px solid white; */
        background-color: #1B1C20;
    }
`;