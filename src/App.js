import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Header from "./Components/Header";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
