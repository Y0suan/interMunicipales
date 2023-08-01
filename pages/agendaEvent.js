import React from 'react'
import styled from 'styled-components';
import { AiOutlineArrowRight } from 'react-icons/ai';



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

export const agendaEvent = () => {
  return (
    <Cont>EventosPendientes</Cont>
  )
}
