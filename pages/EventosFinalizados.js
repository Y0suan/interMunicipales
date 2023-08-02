import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import React from 'react'
import styled from 'styled-components';


const Cont = styled.div`
  margin: 0;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  box-sizing: border-box;
`;
const ContTitle = styled.div`
width:100%;
height:60%;
padding:40px 0;
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
const EventosFinalizados = () => {
  return (
    <>
    <Header></Header>
    <Cont>
    <ContTitle>   
            <Title>    
                no tenemos eventos finalizados aun
            </Title>
        </ContTitle>
    </Cont> 
    <Footer></Footer>
    </>

  )
}

export default EventosFinalizados