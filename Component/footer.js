import Link from 'next/link';
import React from 'react';
import { BiLogoFacebook, BiLogoInstagram, BiLogoWhatsapp } from 'react-icons/bi';
import styled from 'styled-components';


const Footer = () => {
  return (
    <FootCont>
        <img src='https://res.cloudinary.com/dp3imi0w7/image/upload/v1690284224/olimpiadas-66tfpsn8muv0__1_-removebg-preview_dsxjf2.png'></img>
        <ContLink>
            <NavLink href={'/EventosPendientes'} >Agenda de Eventos</NavLink>
            <NavLink href={'/Reglamento'} >Reglamento</NavLink>
            <NavLink href={'/Participantes'} >Participantes</NavLink>
        </ContLink> 
        <ContLink>
            <IconLink href={'/'} ><BiLogoFacebook/></IconLink>
            <IconLink href={'/'} ><BiLogoInstagram/></IconLink>
            <IconLink href={'/'} ><BiLogoWhatsapp/></IconLink>
        </ContLink>   
    </FootCont>
  )
}

export default Footer


const FootCont = styled.footer`
box-shadow: inset 0px 10px 15px -3px rgba(0,0,0,0.1);
padding: 24px;
padding-top:50px;
background-color: white;
display:flex;
flex-direction: column;
align-items: center;
gap:24px;

img{
    width: 150px;
}
`;
const ContLink = styled.div`
padding:16px;
border-top:1px solid #ced4da;
border-bottom:1px solid #ced4da;
display: flex;
gap: 8px;
flex-wrap:wrap;
`;
const NavLink = styled(Link)`
font-family: 'Roboto', sans-serif;
text-decoration: none;
font-size: 16px;
color:#333333;
&:hover{
    color:#00309B;
}
`;
const IconLink = styled(Link)`
text-decoration: none;
font-size: 24px;
color:#333333;
`;