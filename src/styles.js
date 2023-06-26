// styled-components permite montar componentes estilizados

import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    display: flex;
    flex-direction: column; /* Adicione esta propriedade para posicionar os elementos verticalmente */
    align-items: center;
    justify-content: center;

`

//calculadora
export const Content = styled.div`
    background-color: #FFFFFF;
    width: 50%;
    
`
// linha da calculadora
export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
//colunas da calculadora
export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Footer = styled.footer`
  background-color: #8338ec;
  color:#ffffff;
  padding: 10px;
  text-align: center;
  margin-top: 40px; /* Adicione o padding aqui para criar espaço abaixo da calculadora */
`;
