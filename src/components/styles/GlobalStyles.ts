import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    box-sizing: border-box;
    outline: 0;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.theme.colors.contrastText};
  }

  h1, h2, h3, h4, h5, h6  {
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  html, body {
    min-height: 100vh;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
