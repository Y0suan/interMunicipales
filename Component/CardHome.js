import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { BiSolidRightArrow } from 'react-icons/bi';


const ContCard = styled.div`
padding:16px;
display:flex;
justify-content: center;
flex-direction:column;
h1{
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 3.063rem;
  line-height:49px;
  color:#1B1C20;
}
`

const ContCardLink = styled.div`
padding:16px;
background-image:  linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80');
border-radius: 16px;
h1{
  color:white;
}
`

const FooterLink = styled.div`
gap:16px;
width: 100%;
display:flex;
justify-content: center;
align-items: center;
p{
    color:white;
    font-size: 1rem;
}
`

const ContCardTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:30px 0px;
p{
    margin: 0;
}
h1{
    margin:0;
}
`

const ArrowLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
max-height: 20px;
max-width: 20px;
border-radius: 50%;
padding: 12px;
background-color: white;
color: #1B1C20;
.icon{
    font-size: 10px;
}
`

export const CardHome = () => {

  return (
    <ContCard>
        <ContCardTitle>
        <h5>Olimpiadas Estudiantiles</h5>
        <h1>
            Elige un Evento Activo
        </h1>
        </ContCardTitle>
        <ContCardLink>
            <h1>
                todos los eventos activos
            </h1>
            <FooterLink>
                 <p>Da fin a los eventos que se estan jugando en este momento</p>
                 <ArrowLink href={'/eventos'}>
                    <BiSolidRightArrow className='icon' />
                 </ArrowLink>
            </FooterLink>
        </ContCardLink>
    </ContCard>
  )
}
