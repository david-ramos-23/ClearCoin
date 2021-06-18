import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import {createGlobalStyle} from "styled-components";
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`

  body {
    height: 100vh;
    font-family: "Open Sans","Arial",sans-serif;
    color: #2d3134;
    margin: 0;
    padding: 0;
    line-height: 1.3125;
    font-size: 1em;
  }
`;

const Router = () => (
  <React.Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
    <Footer />
  </React.Fragment>

);

export default Router;
