import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { SiGooglemaps } from 'react-icons/si';
import { FaGlassWaterDroplet } from 'react-icons/fa6';
import { TbMapSearch } from 'react-icons/tb';


import styled from 'styled-components';



const Maraton = () => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 50) {
        setCount(count + 1);
      }
    }, 100); // Actualiza cada segundo

    return () => clearInterval(interval); // Limpieza al desmontar el componente
  }, [count]);

  return (
    <Cont1>
        <Header></Header>
        <Cont>
          <Title>
            <TitleH1>Mira los recorridos de la maraton</TitleH1>  
          </Title>

        <ContReco>   
          <Recomendacion>
          recuerda  Beber agua regularmente antes, durante y después de la carrera para mantenerte hidratado
          <FaGlassWaterDroplet></FaGlassWaterDroplet>
          </Recomendacion>
          {/* <Recomendacion>
          Familiarízate con el recorrido de antemano para saber qué esperar en términos de elevación y terreno.
          <TbMapSearch></TbMapSearch>
          </Recomendacion> */}
        </ContReco>  

          <ContFooter>

            <ContCard>
              <CardHeader>
              <Title3>recorrido 1</Title3>  
              <p className='subtitle' > Largada: Montevideo y Agrónomo Pomar</p>
              <p className='subtitle' >Participan: Categoria A Fem</p>
              </CardHeader>
              <ContFoter>
              <ContLink href={'https://goo.gl/maps/q8wNbMMrjXhups4G8'} ><SiGooglemaps className='icon' /><p>1,2 KM</p></ContLink> 
              <ContMap>
                <h1>Corredores :  {count} </h1>
              </ContMap>      
              </ContFoter>
            </ContCard>

            <ContCard>
              <CardHeader>
              <Title3>recorrido 2</Title3>  
              <p className='subtitle' > Largada: Parroquia San Miguel</p>
              <p className='subtitle' >Participan: Categoria A Macs y B Fem</p>
              </CardHeader>
              <ContFoter>
              <ContLink href={'https://goo.gl/maps/7yv1QnDfJ1kz5Kvk9'} ><SiGooglemaps className='icon' /><p>2,2 KM</p></ContLink> 
              <ContMap>
                <h1>Corredores :  {count} </h1>
              </ContMap>      
              </ContFoter>
            </ContCard>

            <ContCard>
              <CardHeader>
              <Title3>recorrido 3</Title3>  
              <p className='subtitle' > Largada:  Av. Hipólito Yrigoyen y Asunción</p>
              <p className='subtitle' >Participan: Categoria B Masc y C Fem</p>
              </CardHeader>
              <ContFoter>
              <ContLink href={'https://goo.gl/maps/MezvjYRNgNY3g2j16'} ><SiGooglemaps className='icon' /><p>3,2 KM</p></ContLink> 
              <ContMap>
                <h1>Corredores :  {count} </h1>
              </ContMap>      
              </ContFoter>
            </ContCard>

            <ContCard>
              <CardHeader>
              <Title3>recorrido 4</Title3>  
              <p className='subtitle' > Largada:  Suiza y Av.Cordoba</p>
              <p className='subtitle' >Participan: Categoria C Masc </p>
              </CardHeader>
              <ContFoter>
              <ContLink href={'https://goo.gl/maps/LAs58zQFjgGQrRem9'} ><SiGooglemaps className='icon' /><p>5 KM</p></ContLink> 
              <ContMap>
                <h1>Corredores :  {count} </h1>
              </ContMap>      
              </ContFoter>
            </ContCard>


          
          </ContFooter>
        </Cont>
        <Footer></Footer>
    </Cont1>
  )
}

export default Maraton

const Cont1 = styled.div`
width: 100%;
height: auto;
box-sizing: border-box;
`;

const Cont = styled.div`
width: 100%;
height: auto;
display:flex;
flex-wrap: wrap;
padding:16px;
gap:16px;
box-sizing: border-box;
`;
const ContReco = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const Title = styled.div`
width:100%;
height:auto;
padding:50px 0;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1534185372994-55f9e64235c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
background-repeat: no-repeat;
background-size: cover;
background-position: 10%;
border-radius: 16px;
color:white;
p{
  font-family: 'Roboto', sans-serif;
}
`
const Recomendacion = styled.h1`
color:#1b1c20;
  width:100%;
  margin:40px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:2.938rem;
  line-height:40px;
  @media (max-width: 425px) {
  width:100%;
  font-size:2.938rem;
  display:none;
  }`


const TitleH1 = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  @media (max-width: 425px) {
    font-size:2.938rem;
  line-height:40px;
  }
`;

const ContFooter = styled.div`
width:100%;
overflow: hidden;
height:auto;
display:flex;
justify-content: space-between;
gap:16px;
box-sizing: border-box;
@media (max-width: 425px) {
  flex-direction: column;
    
  }
`






const ContCard = styled.div`
width:25%;
height: auto;
display:flex;
flex-direction: column;
gap:5px;
box-sizing: border-box;
@media (max-width: 425px) {
  width:100%;

    
  }
`
const CardHeader = styled.div`
width:100%;
height: auto;
background-color: #1b1c20; 
color:white;
border-radius: 16px;
padding:8px 26px;
box-sizing: border-box;

font-size: 14px;
font-style: normal;
font-weight: 400;
font-family: 'Roboto', sans-serif;
`
const Title3 = styled.h3`
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 0px;
text-transform: uppercase;
font-family: 'Big Shoulders Display', 'cursive';
`

const ContLink = styled(Link)`
width: 30%;
height: auto;
background-color: #1b1c20; 
border-radius: 16px;
text-decoration: none;
color:white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
box-sizing: border-box;
padding-top:16px;
.icon{
  font-size: 3rem;
  p{
  font-weight: 400;  
  line-height:0;
}
}

`


const ContFoter = styled.div`
width:100%;
display: flex;
gap:4px;
`

const ContMap = styled.div`
width:70%;
height:100%;
background-color: #1b1c20; 
border-radius: 16px;
display:flex;
justify-content: center;
align-items: center;
h1{
  color:white;
  text-align: center;

  
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: 0px;
text-transform: uppercase;
font-family: 'Big Shoulders Display', 'cursive';

}
`