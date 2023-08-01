import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FaRankingStar } from 'react-icons/fa6';



const Cont = styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;

`;


const FormEventos = ({ evento }) => {
 console.log(evento)
  return (
    <Cont>
      
    </Cont>
  );
};

export default FormEventos;


export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const deporte = await Category.findById(id);

  // Obtén los eventos cuya propiedad "category" sea igual al ID del deporte
  const eventos = await Evento.find({ category: deporte._id });

  return {
    props: {
      deporte: JSON.parse(JSON.stringify(deporte)),
      eventos: JSON.parse(JSON.stringify(eventos)),
    },
  };
}
