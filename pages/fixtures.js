import React from 'react'
import styled from 'styled-components';
import Link from "next/link";
import Header from '@/Component/Header';
import Footer from '@/Component/footer';
import { BiFootball } from 'react-icons/bi'
import { FaGoogleDrive } from 'react-icons/fa6';



const fixtures = () => {
  return (
    <div>
        <Header></Header>
        <ContLinks>
        <LinksFixture>
              <Icon>
              <BiFootball className='icon' />              
              </Icon>
              <div>
              <h4>Futbol de Campo</h4>
              <h5>Categoria: A </h5>
              </div>

               <Link href={'/'}  target="_blank"  className='drive'>
                 <FaGoogleDrive/>
               </Link>
            </LinksFixture>

            <LinksFixture>
              <Icon>
              <BiFootball className='icon' />              
              </Icon>
              <div>
              <h4>Futbol de Campo</h4>
              <h5>Categoria: B </h5>
              </div>
    <a href='https://drive.google.com/file/d/1JGnw3u68AVUY5GwMGbm8kmuxypNkRCMM/view?usp=sharing' target='_blank' className='drive'>
      <FaGoogleDrive />
    </a>
            </LinksFixture>

            <LinksFixture>
              <Icon>
              <BiFootball className='icon' />              
              </Icon>
              <div>
              <h4>Futbol de Campo</h4>
              <h5>Categoria: C </h5>
              </div>

               <a href='https://drive.google.com/file/d/16Xa1ODW0VmolpwJNgkc7nR_M_f4jcRJA/view?usp=sharing'  target="_blank"  className='drive'>
                 <FaGoogleDrive/>
               </a>
            </LinksFixture>

        </ContLinks>
        <Footer></Footer>
    </div>
  )
}

export default fixtures


const ContLinks = styled.div`
width: 100%;
height: auto;
display:flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap:8px;
padding: 8px;
`


const LinksFixture = styled.div`
border-radius: 16px;
box-sizing: border-box;
width: 300px;
height: auto;
padding:8px;
display: flex;
justify-content: space-evenly;
align-items: center;

background-color: #1B1C20;
color:white;
.drive{
    text-decoration: none;
    color:white;
}

h4{
font-family: Roboto;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 0px; /* 150% */
letter-spacing: 0.15px;
}
h5{
    font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 0px; /* 142.857% */
letter-spacing: 0.25px;
}
`

const Icon = styled.div`
display:flex;
justify-content: center;
align-items: center;
border-radius: 50%;
padding: 2px;
width: fit-content;
background-color: white;
color:black;
.icon{
    font-size: 34px;
    border-radius: 50%;
    border: 1px solid black;
    padding: 6px;
}
`