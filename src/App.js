import React from 'react';
import "./App.css";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './Components/Header';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';


function App () {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route exact path="/" component ={HomePage} />
        <Route path="/coin" component ={CoinPage}/>
      </div>
    </BrowserRouter>
  )
}

export default App
