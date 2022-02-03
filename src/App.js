import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Contato from './Components/Contato';
import {BrowserRouter , Link , Route, Router, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Contato">Contato</Link>
        
      </ul>

        
          <Routes>
            <Route path= "/Home" element={<Home/>}/> 
            <Route path= "/Contato" element={<Contato/>}/> 
                
          </Routes>
        

    

    
  );
    </div>
  );
}

export default App;
