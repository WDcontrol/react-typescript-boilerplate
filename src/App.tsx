import React from 'react';
import styled, { createGlobalStyle } from "styled-components";
import {Layout} from 'layout';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }
`;

const StyledApp = styled.div`
  background-color:#000;
  color: #fff;
  min-height: 100vh;
`;

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Layout />
    </StyledApp>
  );
}

export default App;
