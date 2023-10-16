import React from 'react';
import styled from '@emotion/styled';

const TelaInicialDiv = styled.div`
  width: 100%;
  height: 100%;

  .header {
    width: 100%;
    height: 40%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

function TelaInicial() {
  return (
    <TelaInicialDiv>
    <div className='header'>
      <img src={process.env.PUBLIC_URL + '/images/bg-desktop-dark.jpg'} alt="Background" />
    </div>
  </TelaInicialDiv>
  );
}

export default TelaInicial;
