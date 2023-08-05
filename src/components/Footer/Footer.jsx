import './Footer.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (<>
        <div className="footer">
            <div className="footer-column">
                <div className="logo">
                    <img src={logo} alt='logo' />
                    INTEDSUR S.A.C</div>
                <p>Todas tus soluciones eléctricas en un solo lugar.</p>
            </div>
            <div className="footer-column">
                <h4>Nuestra Compañia</h4>
                <ul>
                    <Link to='/'><li>Inicio</li></Link>
                    <Link to='/sobre-nosotros'><li>Sobre nosotros</li></Link>
                    <Link to='/servicios'><li>Servicios</li></Link>
                    <Link to='/contactanos'><li>Contáctanos</li></Link>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contacto</h4>
                <p>+51992829173</p>
                <p>intedsur.peru@gmail.com</p>
                <p>Mz. F Lt. 16, Flores de Villa, San Juan de Miraflores</p>
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
