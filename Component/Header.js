import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components';
import Center from './Center'


import { RiMenu2Line } from 'react-icons/ri';

const StyledHeader = styled.div`

`
const Logo = styled(Link)`
text-decoration:none; 
position:relative;
z-index:3;
img{
  width: 10rem;
}
@media screen and (min-width:768px){
  img{
  width: 8rem;
 }
}

@media (max-width: 425px) {
   img{
    width: 5rem;
   }   
}
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:24px 0;
flex-wrap: wrap;
`

const StyledNav = styled.nav`
${props => props.mobileNavActive ? `
display: block;
`: `
display: none;
` }
z-index: 1;
gap:16px;
position:fixed;
top:0;
bottom:0;
left: 0;
right:0;
padding: 80px 30px 20px;
background-color: white;
@media screen and (min-width:768px){
  display: flex;
  position: static;
  padding: 0;
  background-color: white;
}
`

const NavLink = styled(Link)`
font-family: 'Roboto', sans-serif;
display:block;
text-decoration: none;
color:#aaa;
padding:10px 0; 
border-bottom: 2px solid white;
transition: 0.5s;
@media screen and (min-width:768px){
  padding:0;
}
&:hover{
    color:#00309B;
    border-bottom: 2px solid #00309B;
}
`
const NavButton = styled.button`
border: none;
background-color:transparent;
color:#aaa;
cursor:pointer;
width:50px;
height:50px;
font-size: 24px;
position:relative;
z-index:3;
@media screen and (min-width:768px){
  display: none;
}
`

const Header = () => {
  const [mobileNavActive , setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
        <Center>
            <Wrapper>
            <Logo href={'/'} >  <img src="https://res.cloudinary.com/dzqdjsrez/image/upload/v1696936379/olimpiadas-66tfpsn8muv0__1_-removebg-preview_dsxjf2_2_yinag7.png"></img></Logo>
        <StyledNav mobileNavActive={mobileNavActive} >
        <NavLink href={'/Voley'} >Voley</NavLink>
            <NavLink href={'/Futbol'} >Futbol</NavLink>
            <NavLink href={'/Futsal'} >Futsal</NavLink>
            <NavLink href={'/FutTenis'} >Futbol Tenis</NavLink>
        </StyledNav>
        <NavButton onClick={ () => setMobileNavActive(prev => !prev)} >
          <RiMenu2Line/>
        </NavButton>
            </Wrapper>
        </Center>
    </StyledHeader>
  )
}

export default Header