import React from "react";
import styled from 'styled-components';
import { FaRankingStar } from 'react-icons/fa6';
import Link from "next/link";



const ContPage = styled.div`
box-sizing: border-box;
width: 100%;
height: auto;
display: flex;
justify-content: center;
align-items: center;
color:#1B1C20;
padding: 16px 8px;
gap:8px;
@media screen and (max-width:425px){
flex-direction: column;
}
`
const ContVoley = styled(Link)`
flex:1;
background-image: url('https://images.unsplash.com/photo-1592656094267-764a45160876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
background-size: cover;
border-radius: 8px;
display: flex;
justify-content: center;
padding: 8px;
text-decoration: none;
@media screen and (max-width:425px){
width: 90%;
}
`

const ContFotbal = styled(Link)`
flex:1;
background-image: url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80');
background-size: cover;
border-radius: 8px;
display: flex;
justify-content: center;
padding: 8px;
text-decoration: none;
@media screen and (max-width:425px){
width: 90%;
}
`
const ContFutboltenis= styled(Link)`
flex:1;
background-image: url('https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1638&q=80');
background-size: cover;
border-radius: 8px;
display: flex;
justify-content: center;
padding: 8px;
text-decoration: none;
@media screen and (max-width:425px){
width: 90%;
}
`

const ContFotsal = styled(Link)`
flex:1;
background-image: url('https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
background-size: cover;
border-radius: 8px;
display: flex;
justify-content: center;
padding: 8px;
text-decoration: none;
@media screen and (max-width:425px){
width: 90%;
}
`



const Title = styled.h1`
color: #FFF;
font-size:2.313rem;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
margin: 0px;
`


const DeportesPage = () => {
  return (
    <ContPage>
      <ContVoley href={'/Voley'} >
        <Title>Voley</Title>
      </ContVoley>
      {/* <ContFotbal href={'/Futbal'} >
        <Title>Futbol</Title>
      </ContFotbal> */}
      <ContFotsal href={'/Futsal'}>
        <Title>Futsal</Title>
      </ContFotsal>
      <ContFutboltenis href={'/FutTenis'} >
        <Title>Futbol tenis</Title>
      </ContFutboltenis>
    </ContPage>
  );
};

export default DeportesPage;



