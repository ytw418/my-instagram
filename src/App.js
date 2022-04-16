import './App.css';
import React from 'react';
import BottomTeb from './components/BottomTeb';
import { createGlobalStyle } from 'styled-components';
import MainBlock from './components/MainBlock';
import Header from './components/Header';
import Home from './components/Home';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {
  return (
    <>
    <GlobalStyle />
    <MainBlock>
    <Header header_text={"Reactstagram"}></Header>
    <Home></Home>
    <BottomTeb></BottomTeb>
    </MainBlock>

    </>
  );
}

export default App;
