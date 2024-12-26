
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './componants/Navbar';
import Footer from './componants/Footer';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    
    <div className="App">
    
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes> 
      
      <Footer />
    
    </div>

  );
}

export default App;
