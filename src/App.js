
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';

function App() {
  return (
    <>

       
    <BrowserRouter>
    <Navbar/>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about/*" element={<About/>} />
      </Routes>
    </BrowserRouter>
        
          
        
    </>
  );
}

export default App;
