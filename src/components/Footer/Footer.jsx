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
                    <h1>INTEDSUR<br></br> S.A.C</h1></div>
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
                    <Link to='/' onClick={handleContactClick}><li>Inicio</li></Link>
                    <Link to='/sobre-nosotros' onClick={handleContactClick}><li>Sobre nosotros</li></Link>
                    <Link to='/servicios' onClick={handleContactClick}><li>Servicios</li></Link>
                    <Link to='/contactanos' onClick={handleContactClick}><li>Contáctanos</li></Link>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Medios de contacto</h4>
                <p>Celular: +51 992 829 173</p>
                <p>Correo: intedsur.peru@gmail.com</p>
                <p>Ubicación: Mz. F Lt. 16, Flores de Villa, San Juan de Miraflores</p>
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
