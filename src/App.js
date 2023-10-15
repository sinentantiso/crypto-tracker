import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Components/Header";
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './Pages/HomePage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles (() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}))


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" component = {HomePage} exact/>
        <Route path="/coins/:id" component = {CoinPage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
