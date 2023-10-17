import React from 'react';
import "./App.css";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header';
import { Route } from 'react-router-dom/cjs/react-router-dom';


function App () {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route />
      </div>
    </BrowserRouter>
  )
}

export default App
