import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.png'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
                <Link to='/'>
            <div className="logo">
                    <img src={logo} alt='logo' />
                    INTEDSUR <br></br>S.A.C
                </div>
                </Link>
            <div className={`menu ${menuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={handleMenuToggle}>Inicio</Link>
                <Link to="/sobre-nosotros" onClick={handleMenuToggle}>Sobre nosotros</Link>
                <Link to="/servicios" onClick={handleMenuToggle}>Servicios</Link>
                <Link to="/contactanos" onClick={handleMenuToggle}>Contáctanos</Link>
            </div>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default Navbar;
