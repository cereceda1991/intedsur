import './ServicesSection.css';
import icon1 from '../../assets/services/icon.svg';
import icon2 from '../../assets/services/icon2.svg';
import icon3 from '../../assets/services/icon3.svg';
import icon4 from '../../assets/services/icon4.svg';
import serviceImage from '../../assets/services/image.png';

const ServicesSection = () => {
    return (
        <div className="services-container">
            <div className="service-cards">
                <div className="card">
                    <img src={icon1} alt="Icono 1" />
                    <h3>Precio asequible</h3>
                    <p>Ofrecemos precios competitivos para nuestros servicios, manteniendo la calidad sin comprometer tu presupuesto.</p>
                </div>
                <div className="card">
                    <img src={icon2} alt="Icono 2" />
                    <h3>Disponibilidad 24/7</h3>
                    <p>Estamos disponibles las 24 horas del día, los 7 días de la semana, para atender tus necesidades eléctricas en cualquier momento.</p>
                </div>
                <div className="card">
                    <img src={icon3} alt="Icono 3" />
                    <h3>Planeación</h3>
                    <p>Planificamos cada proyecto eléctrico con precisión y eficiencia, asegurándonos de cumplir con tus expectativas y requisitos.</p>
                </div>
                <div className="card">
                    <img src={icon4} alt="Icono 4" />
                    <h3>Consulta gratuita</h3>
                    <p>Ofrecemos consultas gratuitas para entender tus necesidades y recomendarte las mejores soluciones eléctricas.</p>
                </div>
            </div>
            <div className="service-info">
                <h2>Nuestros servicios</h2>
                <p>Nuestro equipo de profesionales altamente capacitados está comprometido en ofrecer resultados excepcionales en cada proyecto que emprendemos.</p>
                <img src={serviceImage} alt="Nuestros servicios" />
            </div>
        </div>
    );
};

export default ServicesSection;
