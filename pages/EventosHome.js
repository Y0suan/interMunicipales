import React from 'react';
import { mongooseConnect } from '@/lib/mongoose';
import Link from 'next/link';
import styled from 'styled-components';
import  {Evento}  from '@/models/Eventos';
import { CardEventos2 } from '../Component/CardEventos2';

const Cont = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
`;

const EventosHome = ({ eventos }) => {
  console.log(eventos);
  return (
    <Cont>
      {/* {eventos.map((ev, index) => (
        <CardEventos2 key={ev._id} evet={ev} />
      ))} */}
    </Cont>
  );
};

export default EventosHome;

export async function getServerSideProps() {
  try {
    await mongooseConnect();

    // Consultar todos los objetos en el modelo Evento (no en el modelo Eventos)
    const eventos = await Evento.find({});
    console.log(eventos); // Agrega este log para verificar los datos

    return {
      props: {
        eventos: JSON.parse(JSON.stringify(eventos)),
      },
    };
  } catch (error) {
    console.error("Error al obtener los eventos:", error);
    return {
      props: {
        eventos: [],
      },
    };
  }
}
