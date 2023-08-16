import React, { useRef } from 'react';
import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import styled from 'styled-components';
import { Evento } from '@/models/Eventos';
import { CardEventos2 } from './CardEventos2';
import CartEventosHome from './CartEventosHome';

import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';


const Scroll = styled.div`
  margin: 0;
  padding: 16px;
  width: 100%;
  height: auto;
  position: relative;
  box-sizing: border-box;

`;

const Cont = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 8px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow: hidden;
`;

const ScrollButton = styled.button`
transition: 3.5s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;
`;

const ScrollLeftButton = styled(ScrollButton)`
transition: 3.5s;

  left: 0;
  border-radius: 50%;
  border:solid 2px white;
  background-color: white;
  padding:5px;
  .icon{
    font-size:1rem ;
  transition: 1s;
  }
  transition: 1s;
  &:hover{
  transition: 1s;
  left: 0;
  border-radius: 50%;
  border:solid 2px black;
  background-color: white;
  padding:5px;
    .icon{
      font-size:2rem ;
  transition: 1s;

  }
  }
`;

const ScrollRightButton = styled(ScrollButton)`
transition: 3.5s;

  right: 0;
  border-radius: 50%;
  border:solid 2px white;
  background-color: white;
  padding:5px;
  .icon{
    font-size:1rem ;
  transition: 1s;
  }
  transition: 1s;
  &:hover{
  transition: 1s;
    right: 0;
  border-radius: 50%;
  border:solid 2px black;
  background-color: white;
  padding:5px;
    .icon{
      font-size:2rem ;
  transition: 1s;

  }
  }
`;

const EventosHome = ({ eventos }) => {
  const contRef = useRef(null);

  const handleScrollLeft = () => {
    contRef.current.scrollBy({
      left: -280,
      behavior: 'smooth',
      
    });
  };

  const handleScrollRight = () => {
    contRef.current.scrollBy({
      left: 280,
      behavior: 'smooth',
    });
  };

  return (
    <Scroll>
      <ScrollLeftButton onClick={handleScrollLeft}><AiOutlineArrowLeft className='icon' /></ScrollLeftButton>
      <ScrollRightButton onClick={handleScrollRight}><AiOutlineArrowRight className='icon' /></ScrollRightButton>
      <Cont ref={contRef}>
        {eventos.map((ev, index) => (
          <CartEventosHome key={ev._id} evet={ev} />
        ))}
      </Cont>
    </Scroll>
  );
};

export default EventosHome;
