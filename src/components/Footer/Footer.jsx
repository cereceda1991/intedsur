import './Footer.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const handleContactClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (<>
        <div className="footer">
            <div className="footer-column">
                <div className="logo">
                    <img src={logo} alt='logo' />
                    <h1>INTEDSUR S.A.C</h1></div>
                <p>Todas tus soluciones eléctricas en un solo lugar.</p>
                <div className='social_icons'>
                    <FaInstagram />
                    <FaFacebookF />
                    <FaTwitter />
                </div>
            </div>
            <div className="footer-column">
                <h4>Sobre nosotros</h4>
                <ul>
                    <li> <Link to='/' onClick={handleContactClick}>Inicio</Link></li>
                    <li> <Link to='/sobre-nosotros' onClick={handleContactClick}>Sobre nosotros</Link></li>
                    <li> <Link to='/servicios' onClick={handleContactClick}>Servicios</Link></li>
                    <li> <Link to='/contactanos' onClick={handleContactClick}>Contáctanos</Link></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Medios de contacto</h4>
                <ul>
                    <li>Celular: +51 992 829 173</li>
                    <li>Correo: intedsur.peru@gmail.com</li>
                    <li>Ubicación: Mz. F Lt. 16, Flores de Villa, San Juan de Miraflores</li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <h3>© 2023, INTEDSUR S. A. C. Servicios eléctricos. Todos los derechos reservados.</h3>
            <p>Desarrollado por Max Cereceda - <a href="https://www.linkedin.com/in/maxcereceda/">LinkedIn</a> y Diseñado por Elizabeth León - <a href="https://www.linkedin.com/in/elizabethleonperez/">LinkedIn</a></p>
        </div>

    </>
    );
};

export default Footer;
