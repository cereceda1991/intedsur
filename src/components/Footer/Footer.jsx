import './Footer.css';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (<>
        <div className="footer">
            <div className="footer-column">
                <div className="logo">
                    <img src={logo} alt='logo'/>
                    INTEDSUR S.A.C</div>
                <p>Todas tus soluciones eléctricas en un solo lugar.</p>
            </div>
            <div className="footer-column">
                <h4>Nuestra Compañia</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contactanos">Contáctanos</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Contacto</h4>
                <p>+51992829173</p>
                <p>intedsur.peru@gmail.com</p>
                <p>Mz F Lt 16 Flores de Villa-San Juan de Miraflores</p>
            </div>
        </div>
        <div className="footer-bottom">
            © 2023 INTEDSUR, Todos los derechos reservados
        </div>
    </>
    );
};

export default Footer;
