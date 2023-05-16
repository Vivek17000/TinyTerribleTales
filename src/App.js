import './App.css';
import Front from './Components/Front.js';
import Fetch from './Components/Fetch.js';

import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


function App() {
  
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front/>} />
        <Route path="/fetch" element={<Fetch/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
