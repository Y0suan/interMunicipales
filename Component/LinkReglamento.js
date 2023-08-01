import React from 'react'
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from "next/link";

const ContPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color:#1B1C20;
  padding: 16px 0px;
`;

const Title = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h1 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 2.625rem;
  }
`;

const Deporte = styled(Link)`
  text-decoration: none;
  color:#1B1C20;
  border-radius: 18px;
  width: 80%;
  display: flex;
  justify-content: space-between ;
  align-items: center;
  padding: 16px;
  border:1px solid #1B1C20;
  margin-bottom: 16px;
  background-color: white;
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  h4 {
    margin: 0;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.625rem;
  }
  p {
    font-size: 1.625rem;
    font-weight: bold;
    background-color: #1B1C20;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    padding: 4px;
  }
  .icon{
    font-size: 1.625rem;
  }
  &:hover{
  background-color: #1B1C20 ;
  color: #D6FF00;
  }
`;

const LinkReglamento = ({ deportes }) => {
  return (
    <ContPage>
      <Title>
        <h1>Lista de Deportesf</h1>
        <p></p>
      </Title>
      {deportes.map((d, index) => (
        <Deporte key={d._id} href={'/Reglamentos/' + d._id}>
          <h4>{d.name}</h4>
          <AiOutlineArrowRight className='icon'/>
        </Deporte>
      ))}
    </ContPage>
  )
}

export default LinkReglamento