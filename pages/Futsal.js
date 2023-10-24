import Header from '@/Component/Header';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';


import { HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import Footer from '@/Component/footer';

const ContPage = styled.div`
height: auto;
box-sizing: border-box;
`
const ContTop = styled.div`
box-sizing: border-box;
width: 100%;
padding: 16px;
background-image: url('https://images.unsplash.com/photo-1510051640316-cee39563ddab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
background-size: cover;
color:#fff;
.flex{
    display: flex;
    gap:16px;
}
h3{
    width:fit-content;
    background-color: rgba(255, 255, 255, 0.407);
    padding: 8px 16px;
    border-radius: 8px 16px;
}
`
const Title = styled.h1`
/* color: #1b1c20; */
color:#fff;
font-size:6.5rem;
font-style: normal;
font-weight: 900;
line-height: normal;
text-transform: uppercase;
margin: 0px;
`


const ContReglamento = styled.div`
box-sizing: border-box;
width: 100%;
height: auto;
padding:16px;
.cont{
box-sizing: border-box;
    background-color: #000000;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding:16px;
    .title{
        font-size: 39px;
    }
    .cardCont{
        width: 100%;
        display:flex;
        gap:16px;
    }
    p{
        color:white;
        max-width: 600px;
        font-size: 19px;
    }
}
@media screen and (max-width:425px){
  .cardCont{
    flex-direction: column;
  }
}
`
const CarInfo = styled.div`
padding: 16px;
box-sizing: border-box;
border-radius: 8px;
max-width:300px;
width: fit-content;
height: min-content;
background-color: #28282A;
.subtitle{
    font-size: 31px;
    text-transform: none;
}
.parrafo{
    font-size: 21px;
    text-transform: none;
    font-weight: 600;
}
`
const ButtonLink = styled(Link)`

.icon{
height: 50px;
width: 50px;
    font-size:39px;
    text-decoration: none;
    color:white;
}
`
const ContPartidos = styled.div`
box-sizing: border-box;
width: 100%;
height: auto;
padding:16px;

.cont{
box-sizing: border-box;
    display:flex;
    flex-wrap: wrap;
    gap:16px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding: 16px;
    :hover{
        transition: 1s;
        background-color: #28282A;
        color:white;
        .p{
            color:white;
        }

    }
}
.title{
    font-size: 39px;
    color:black;
    border-bottom: 1px solid black;
}
.card{
    width: fit-content;
    border: 1px solid #E8E8E8;
    padding: 16px;
    border-radius: 8px;

    div{
        display:flex;
        gap:8px;
        
    }
    h5{
        font-family: 'Poppins', sans-serif;
        font-size:16px ;
    }
    p{
        font-size: 14px;
        color:gray;
        font-family: 'Poppins', sans-serif;
    }
}

`

const Futsal = () => {
  return (
    <ContPage>
        <Header></Header>
        <ContTop>
        <Title>Futsal</Title>
        <div className='flex'>         
            <h3>Mixto</h3>
            <h3>Masculino</h3>
            <h3>Femenino</h3>
        </div>       
        </ContTop>
        <ContReglamento>
            <div className='cont' >
                <Title className='title'>
                   mira todo sobre el deporte 
                </Title>
                <p>En Olimpiadas Municipales, nos enfocamos exclusivamente en proporcionarte información detallada sobre nuestro evento deportivo. Encuentra todos los detalles necesarios para participar y disfrutar al máximo de esta emocionante competición local. ¡Tu camino hacia la victoria comienza aquí!</p>
                <div className='cardCont' >
                   <CarInfo>
                      <Title className='subtitle' >Descarga el reglamento</Title>
                      <ButtonLink href={'https://docs.google.com/document/d/1Z8BMXcPBaPW_9opBo2dImKjYqYq8vo6P/edit?usp=sharing&ouid=100664009406258689319&rtpof=true&sd=true'} target='_blank' > <HiOutlineDocumentArrowDown className='icon'/> </ButtonLink>
                   </CarInfo>
                   <CarInfo>
                      <Title className='subtitle' >Futsal</Title>
                      <Title className='parrafo' >Garantía de $ 4.000 <br/>Arbitraje  por equipo $ 4.000</Title>
                   </CarInfo>
                   <CarInfo>
                      <Title className='subtitle' >Descarga el Fixture Completo</Title>
                      <ButtonLink href={'https://drive.google.com/file/d/1WSefDbxh5MO5IpQmMgSC9itoaRRlomKy/view?usp=sharing'} target='_blank' > <HiOutlineDocumentArrowDown className='icon'/> </ButtonLink>
                   </CarInfo>
                </div>
            </div>
        </ContReglamento>
        <ContPartidos>
        <Title className='title'>
                   zona A
                </Title>
            <div className='cont'>
                <div className='card'>
                    <h5>OBRAS PUBLICAS		Vs.	JUZ. DE FALTAS</h5>
                    <div>
                    <p>19:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>MIERCOLES 25/10/2023 </p>
                    </div>
                </div>
                <div className='card'>
                    <h5> C.D.E.-MUNI			Vs.	OBRAS PUBLICAS</h5>
                    <div>
                    <p>20:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>VIERNES 27/10/2023 </p>
                    </div>
                </div>
                <div className='card'>
                    <h5>PRODUCCION 			Vs.	RECOLECCION	</h5>
                    <div>
                    <p>21:00 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>VIERNES 27/10/2023 </p>
                    </div>
                </div>
                <div className='card'>
                    <h5> CDE-MUNI			Vs.	TRANSITO</h5>
                    <div>
                    <p>21:00 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>LUNES 30/10/2023  </p>
                    </div>
                </div>
            </div>

                <Title className='title'>
                   zona B
                </Title>
                <div className='cont'>
                <div className='card'>
                    <h5>PRODUCCION			Vs.	RUSTICA ELDORADO</h5>
                    <div>
                    <p>20:00 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>MIERCOLES 25/10/2023 </p>
                    </div>
                </div>
                <div className='card'>
                    <h5>PLANTA ASFALTICA		Vs.	RECOLECCION</h5>
                    <div>
                    <p>20:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>MIERCOLES 25/10/2023 </p>
                    </div>
                </div>

                <div className='card'>
                    <h5> PLANTA ASFALTICA		Vs.	RUSTICA ELDORADO	</h5>
                    <div>
                    <p>20:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>LUNES 30/10/2023  </p>
                    </div>
                </div>
                </div>



                <Title className='title'>
                   zona C
                </Title>
                <div className='cont'>
                <div className='card'>
                    <h5> EDIF. CRISTAL			Vs.	BROMATOLOGIA</h5>
                    <div>
                    <p>19:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>VIERNES 27/10/2023 </p>
                    </div>
                </div>
                <div className='card'>
                    <h5> ACCION SOCIAL		Vs.	EDIF. CENTRAL</h5>
                    <div>
                    <p>20:00 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>VIERNES 27/10/2023 </p>
                    </div>
                </div>

                <div className='card'>
                    <h5> EDIF. CRISTAL			Vs.	EDIF. CENTRAL	</h5>
                    <div>
                    <p>19:30 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>LUNES 30/10/2023  </p>
                    </div>
                </div>
                <div className='card'>
                    <h5> ACCION SOCIAL 		Vs.	BROMATOLOGIA	</h5>
                    <div>
                    <p>20:00 Hs.</p><p>POLIDEPORTIVO KM 9  </p><p>LUNES 30/10/2023  </p>
                    </div>
                </div>
                </div>

        </ContPartidos>
        <Footer/>
    </ContPage>
  )
}

export default Futsal