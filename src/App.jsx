import './App.css'
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Home } from './Pages/Home/Home';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom';
import OurServices from './components/OurServices/OurServices';


function App() {

  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/servicios" element={<OurServices />} />
        <Route path="/contactanos" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>

  )
}

export default App
