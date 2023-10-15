import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Components/Header";
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" component = {HomePage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
