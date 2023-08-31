import React from 'react'
import styled from 'styled-components'

const Aerobic = () => {
  return (
    <Cont>
      <ContGrilla>
        <Title>Grilla de Aeróbic</Title>
        <div>
    <div className='columnas' >
    <spam>1 - ISSJ 'F' </spam>
    <spam>2 - ISFA 'M' </spam>
    <spam>3 - CEP 16 'F' </spam>
    <spam>4 - EPCE 'M' </spam>
    <spam>5 - IFGE 'F' </spam>
    </div>
    <div className='columnas' >
    <spam>6 - IH 'M' </spam>
    <spam>7 - ISFA 'F' </spam>
    <spam>8 - IFGE 'M' </spam>
    <spam>9 - EPET 6 'F' </spam>
    <spam>10 - ISSJ 'M' </spam>
    </div>

    <div className='columnas' >
    <spam>11 - EAE 'F' </spam>
    <spam>12 - EPET 'M' </spam>
    <spam>13 - IH 'F' </spam>
    <spam>14 - EAE 'M' </spam>
    <spam>15 - EPCE 'F' </spam>
    </div>
  </div>
      </ContGrilla>
    </Cont>
  )
}

export default Aerobic

const Cont = styled.div`
width: 100%;
height: auto;
box-sizing: border-box;
padding:16px;
`;
const ContGrilla = styled.div`
width: 100%;
height: 100%;
background-color: #1B1C20;
border-radius: 16px;
box-sizing: border-box;
padding:24px;
display: flex;
div{
  width: 100%;
  color:white;
  display:flex;
  flex-wrap:wrap;
  .columnas{
    width: 30%;
    display:flex;
    flex-direction: column;
    line-height: 30px;
    font-size:32px;
    font-weight: 700;
  }
  @media (max-width: 425px) {
  flex-direction: column;
  .columnas{
  width: 60%;
  }
}
}
@media (max-width: 425px) {
  flex-direction: column;
}
`;
const Title = styled.h1`
  margin:0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-size:4.938rem;
  line-height:70px;
  color:white;
  @media (max-width: 425px) {
  font-size:3.938rem;
  line-height:60px;
  margin-bottom: 16px;
}
`