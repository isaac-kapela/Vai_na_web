import styled from 'styled-components';

export const ConteudoContainer = styled.main`
  background-color: #FFBC0D;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .conteudo-container {
    display: grid;
    grid-template-columns: auto auto; /* Define duas colunas de tamanho automático */
    grid-column-gap: 20px; /* Espaçamento entre as colunas */
    align-items: center; 
  }

  .texto-container {
    font-weight: 800;
    font-size: 30px;
    color:white;
  }

  ul{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;


  }
  .img-itens img{
    width: 80px;
    padding-bottom: 30px;
  }
`;

export const  ConteudoSection = styled.section`

`;