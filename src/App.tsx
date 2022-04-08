import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Routes from './routes';
import { StyledApp } from './index.styles';

import './App.css';

function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
