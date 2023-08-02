import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotateY(-360deg); /* Cambiamos a -360 grados para girar hacia atrás */
  }
`;

const LoaderContainer = styled.div`
  background-color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const LoaderText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
  margin-top: 0px;
  font-family: 'Roboto', sans-serif;
  color:#033296;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const RotatingImage = styled.img`
  width: 200px;
  height: auto;
  animation: ${rotate} 2s linear infinite; /* Usamos la misma animación "rotate" */
`;

const Loader = () => {
  return (
    <LoaderContainer>
      <ImageContainer>
        <RotatingImage
          src='https://res.cloudinary.com/dp3imi0w7/image/upload/v1690284224/olimpiadas-66tfpsn8muv0__1_-removebg-preview_dsxjf2.png'
          alt="Imagen"
        />
      </ImageContainer>
      <LoaderText>Cargando...</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
